// import InstagramEmbed from 'react-instagram-embed'
import React, { useState, useEffect } from "react"
import getData from "./getData"
import style from "../styles/Instagram.module.scss"
import Carousel, { consts } from "react-elastic-carousel"
import { LeftArrowForCarousel, RightArrowForCarousel } from "../public/icons"
import { useMediaQuery } from "@material-ui/core"

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

const Instagram = () => {
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

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <LeftArrowForCarousel />
      ) : (
        <RightArrowForCarousel />
      )
    return (
      <div className={style.containerForButton}>
        <button
          onClick={onClick}
          disabled={isEdge}
          className={style.buttonSelf}
        >
          {pointer}
        </button>
      </div>
    )
  }

  const setPosts = async () => {
    const res = await getData()
    console.log(res.data)
    setGramz(res.data)
  }
  useEffect(() => {
    setPosts()
  }, [])

  const isMobile = useMediaQuery("(max-width:907px)")

  const isSmallestMobile = useMediaQuery("(max-width:500px)")

  return (
    <>
      <div className={style.mainWrapper}>
        <h3 className={style.title}>Social media blog</h3>
        <Carousel
          renderArrow={myArrow}
          pagination={false}
          itemsToShow={
            (!isMobile && 3,
            isMobile && 2,
            // isSmallestMobile && 1,
            isSmallestMobile || 2)
          }
          transitionMs={300}
        >
          {gramz?.map((post, index) => {
            return (
              <article className={style.mainContainer} key={index}>
                <div className={style.imageContainer}>
                  <img
                    src={post.media_url}
                    alt="instagram_post"
                    className={style.gramzImage}
                  ></img>
                </div>
                <div className={style.descriptionContainer}>
                  <p>{post.caption}</p>
                </div>
              </article>
            )
          })}
        </Carousel>
      </div>
    </>
  )
}

export default Instagram
