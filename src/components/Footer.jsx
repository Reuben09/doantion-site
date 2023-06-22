import React from 'react'

const Footer = () => {
  return (
    <div
    className='w-full flex justify-around lg:flex-row flex-col items-start lg:items-center ml-4 lg:ml-0 lg:mt-0 mt-40'
    style={{height: "18.188rem"}}
    >
        <div className='lg:-mt-8 mb-12'>
        <div className='flex items-center mb-4'>
              <h3 className="self-center ml-2 text-xl font-semibold text-black mr-24">HopefulGiving</h3>
     </div>
     <div>
        <p className='text-sm font-normal text-black'>Make a difference today</p>
        <p className='text-sm font-normal text-black'>Donate to a better future</p>
        <p className='text-sm font-normal text-black'>Renowned Global Brands.</p>
     </div>
        </div>

        <div className='mb-12'>
        <div className='flex items-center mb-4'>
            <h3 className='text-xl font-semibold text-white'>Company</h3>
     </div>
     <div>
        <p className='text-sm font-normal mb-1'>About</p>
        <p className='text-sm font-normal mb-1'>Donation</p>
        <p className='text-sm font-normal mb-1'>History</p>
        <p className='text-sm font-normal mb-1'>Mission</p>
     </div>
        </div>


        <div className='mb-12'>
        <div className='flex items-center mb-4'>
            <h3 className='text-xl font-semibold text-white'>Information</h3>
     </div>
     <div>
        <p className='text-sm font-normal mb-1'>Request a Quote</p>
        <p className='text-sm font-normal mb-1'>Home</p>
        <p className='text-sm font-normal mb-1'>Contact us</p>
        <p className='text-sm font-normal mb-1'>Services</p>
     </div>
        </div>

     <div>

     </div>
    </div>
  )
}

export default Footer