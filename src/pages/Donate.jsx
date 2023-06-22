import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from "../../client"

const Donate = () => {
    const [singlePost, setSinglePost] = useState();
    const params = useParams(); 
    const slug = params.slug;

    useEffect(() => {
        client.fetch(`*[slug.current == "${slug}"] {
          title,
          slug,
          body,
          description,
          publishedAt,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt,
          },
          "name": author->name,
      }`).then((data) => 
      {
        setSinglePost(data[0])
        console.log(data[0])
      }
      ).catch(console.error)
      }, [slug])

  return (
    <div className="mt-20 flex justify-center align-center mb-20">
    <div className="flex flex-col lg:flex-row justify-center lg:items-start items-center align-center bg-gray-300
py-8 px-4" style={{width: "75%"}}>
       <div className="items-center">
                <img style={{width:"500px"}}
                    alt={singlePost?.title}
                    src={singlePost?.mainImage.asset.url} />
            </div>
            <div>
            <div className="mt-8 lg:mt-12 flex justify-center items-center lg:justify-start align-center lg:items-start flex-col">
                <h5 className="mb-4 text-center lg:text-left lg:ml-4 text-xl font-semibold">{singlePost?.title}</h5>
                <p className="mb-8 text-center lg:text-left  lg:ml-4">{singlePost?.description}</p>
                <button class="bg-gray-600 text-center hover:bg-blue-700 w-40 text-white font-bold py-2 mx-4 rounded">
                 Donate now
                </button>
            </div>
            </div>
    </div>
    </div>
  )
}

export default Donate