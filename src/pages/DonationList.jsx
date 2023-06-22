import { useState, useEffect } from 'react'
import client from "../../client"
import { Link } from 'react-router-dom'

const DonationList = () => {
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
        } | order(publishedAt desc)`).then((data) => {
          setPosts(data)
          console.log(data)
        }).catch(console.error);
      }, []);

  return (
   <section className="mt-8 lg:px-24 xs:px-6 mb-12">
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
        </div>
      </section>
  )
}

export default DonationList