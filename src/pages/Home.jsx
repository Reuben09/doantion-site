import { useState, useEffect } from 'react'
import HeroImg from '../assets/images/img-1.png'
import WhatWeDoImg from '../assets/images/img-2.jpeg'
import client from "../../client"
import { Link } from 'react-router-dom'


const Home = () => {
  const [posts, setPosts] = useState([]);

 useEffect(() => {
  client.fetch(`*[_type == "post"] {
    title,
    slug,
    description,
    publishedAt,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt,
    }
  } | order(publishedAt desc) [0..3]`).then((data) => {
    setPosts(data)
    console.log(data)
  }).catch(console.error);
}, []);

  return (
    <>
    <section id="hero" className="h-auto mt-20">
    <h1 className="text-4xl font-semibold text-gray-900 text-center mb-4">Make a Difference Today</h1>
    <h1 className="text-2xl font-semibold text-gray-900 text-center mb-8">Donate for a Better Future.</h1>
    <div className="flex justify-center mb-20">
      <img src={HeroImg} alt="car img" style={{width: "400px"}} />
    </div>
  </section>

   <section id="about" className="text-center mb-40">
    <div className="flex lg:flex-row flex-col justify-center items-center m-0 lg:mr-24">
      <div className='flex justify-center items-center mb-8 lg:mb-0'>
        <img src={WhatWeDoImg} alt="about car" className='w-11/12 text-center' style={{width: "400px"}}/>
    </div>
    <div style={{height: "18rem"}} className="lg:w-96 w-11/12 m-0 lg:ml-24 text-left">
      <h2 className="text-2xl text-black font-semibold mb-2">
      Together for a Cause
      </h2>
      <h2 className="text-2xl text-black font-semibold mb-6">
      Our Work and Why It Matters
      </h2>
      <p className="font-normal text-base mb-6 text-gray-700">Support our cause. Together, we make a lasting impact. Education, healthcare, environment, empowerment. Your contribution transforms lives. Join us, donate now, and make a difference that matters.</p>
      <button className="rounded-sm text-white font-normal text-base px-8 py-4" style={{background: "#4177DC"}}>Donate now</button>
    </div>
    </div>
  </section>


  <section className="mt-8 lg:px-24 xs:px-6 mb-8 relative">
        <h2 className="text-center mb-12 mt-8 text-2xl">Urgent Donation Needs</h2>

        <div className="mx-8">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {posts.map((postItem) => {
              return (
                <div
                  id={postItem.slug.current}
                  className="p-2"
                  style={{
                    backgroundColor: "rgb(231, 231, 231)",
                    height: "350px",
                  }}
                >
                  <div style={{ height: "12rem" }}>
                    <img
                      className="h-48 w-full"
                      style={{ objectFit: "cover" }}
                      src={postItem?.mainImage.asset.url}
                      alt="product image"
                    />
                  </div>
                  <p className="text-center py-4 font-semibold">
                    {postItem?.title}
                  </p>
                  <div
                    className="text-center"
                  >
                    <Link
                      className="underline"
                      to={`/donate/${postItem?.slug.current}`}
                    >
                      See more
                    </Link>
                  </div>
                </div>
                
              );
            })}
            
          </div>
          <div className="underline flex justify-end  items-center w-full mt-20"> 
          <Link to="donation-list">See Full list&rarr; </Link>
        </div>
        </div>
      </section>

           <section className="flex flex-col lg:px-8 xs:px-4 align-center justify-center mb-20">
        <form>
          <h2 className="mt-40 text-center font-semibold text mb-1 text-2xl" 
          >
            Subscribe to our newsletter
          </h2>
          <p className="text-center mb-4">
          Stay informed about our upcoming events! Join our community and make a difference today.
          </p>
          <div className="flex justify-center flex-col align-center">
          <div className="mb-4 flex justify-center align-center">
          <input class="shadow appearance-none border-0 rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Full Name" />
          </div>
          <div className="mb-4 flex justify-center align-center">
          <input class="shadow appearance-none border-none rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
          </div>
          </div>
          <div className="text-center w-full mb-4">
             <button class="bg-gray-800 text-white font-bold py-2 px-8 mx-4 rounded">
               Subcribe
              </button>
          </div>
        </form>
      </section>
    </>
  )
};

export default Home;
