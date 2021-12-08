// import InstagramEmbed from 'react-instagram-embed'
import React, { useState, useEffect } from "react"
import getData from "./getData"
import style from "../styles/Instagram.module.scss"

const url = `https://www.instagram.com/graphql/query/?query_hash=dbdfd83895d23a4a0b0f68a85486e91c&variables={"id":"1554310719","first": 4}`

// async function getData() {
//   const data = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       mode: "no-cors",
//     },
//   }).then((res) => res.json())
//   console.log(data)
//   return data
// }

export const Instagram = () => {
  const [gramz, setGramz] = useState(null)
  //   useEffect(() => {
  //     console.log("fetching the gramz")
  //     fetch(url)
  //       .then((data) => data.json())
  //       .then(({ data }) => {
  //         console.log("back!")
  //         const thumbs = data.user.edge_owner_to_timeline_media.edges.map(
  //           (edge) => ({
  //             url: edge.node.thumbnail_src,
  //             caption: edge.node.edge_media_to_caption?.edges[0]?.node?.text,
  //             id: edge.id,
  //           })
  //         )
  //       })
  //   }, [])

  const setPosts = async () => {
    const res = await getData()
    console.log(res.data)
    setGramz(res.data)
  }
  useEffect(() => {
    setPosts()
  }, [])

  return (
    <>
      <div className={style.mainWrapper}>
        {gramz?.map((post, index) => {
          return (
            <article className={style.mainContainer} key={index}>
              <img
                src={post.media_url}
                alt="instagram_post"
                className={style.gramzImage}
              ></img>
              <div>
                <p>{post.caption}</p>
              </div>
            </article>
          )
        })}
      </div>
    </>
  )
}
