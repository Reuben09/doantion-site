import BudPay from "budpay-react";

  const config = {
    secret_key: "sk_test_pn3tjaocefjz12orpfpw0jp0v8lvhyznkjdwmhn",
    signature: "your-HMAC-Signature",
  };

  const budPay = new BudPay(config);

  const { acceptPayment } = budPay;

 export const paywithBudPay = async (amount) => {
    const payload = {
      email: "daniel@gmail.com",
      amount: amount,
      callback: "yourcallbackurl",
    };
    try {
      const res = await acceptPayment.standardCheckout(payload);
      console.log(res);

      window.open(res.data.authorization_url, "_blank");
    } catch (error) {
      console.log(error);
    }
  };
