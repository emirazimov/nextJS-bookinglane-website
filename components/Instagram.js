// import InstagramEmbed from 'react-instagram-embed'
import React, { useState, useEffect } from "react"
import getData from "./getData"
import style from "../styles/Instagram.module.scss"
import Carousel, { consts } from "react-elastic-carousel"
import { LeftArrowForCarousel, RightArrowForCarousel } from "../public/icons"
import { useMediaQuery } from "@material-ui/core"
// import "../styles/globals.css"

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
    console.log(res)
    setGramz(res.data)
  }
  useEffect(() => {
    setPosts()
  }, [])

  const isMobile = useMediaQuery("(max-width:1207px)")

  const isSmallestMobile = useMediaQuery("(max-width:850px)")

  const itemsToShow = () => {
    if (isSmallestMobile) {
      return 1
    } else if (isMobile) {
      return 2
    } else if (!isMobile) {
      return 3
    }
  }

  return (
    <>
      <div className={style.mainWrapper}>
        <h3 className={style.title}>Social media blog</h3>
        <Carousel
          renderArrow={myArrow}
          pagination={false}
          itemsToShow={itemsToShow()}
          transitionMs={300}
          // style={{ height: "1000px" }}
        >
          {gramz?.map((post, index) => {
            return (
              <article className={style.mainContainer} key={index}>
                <div className={style.secondaryContainer}>
                  <div className={style.imageContainer}>
                    <img
                      src={post.media_url}
                      alt="instagram_post"
                      // objectFit="contain"
                      // style={{ width: "100%", height: "100%" }}
                      className={style.gramzImage}
                    />
                  </div>
                  <div className={style.descriptionContainer}>
                    <p>{post.caption}</p>
                  </div>
                </div>
              </article>
            )
          })}
          {/* <article className={style.mainContainer}>
            <div className={style.secondaryContainer}>
              <div className={style.imageContainer}>
                <img
                  // src={post.media_url}
                  alt="instagram_post"
                  className={style.gramzImage}
                ></img>
              </div>
              <div className={style.descriptionContainer}>
                <p>
                  adsfasdf asdfsadf asdf asdf asdf asdf asdf asdf asdf
                  asdfasdfasd asdf asdf sdaf asdf asdf asdfasdfasdf asdf asdf
                  asdf asdfas dfasd fasd fasdf asdf asdfasdfa sdf asdf asdf sad
                  sad as asdfasdf asdf asdfasdfa sdfa dsaf asdf asdfasdf asd
                  fasdf asdf asd fasdf asdaf dasfasdfasdfa dasf asdf asdf asdf
                  asdf asdf asdfasdfa dasf asdf asdf asdfas dfasdfasdf asdfasdf
                  asdfasdfasd fasdfasdfasdf asdf asdfasdf asdf asd asd fasd fasd
                  fasd fasdfas daf adsfasdf asdfsadf asdf asdf asdf asdf asdf
                  asdf asdf asdfasdfasd asdf asdf sdaf asdf asdf asdfasdfasdf
                  asdf asdf asdf asdfas dfasd fasd fasdf asdf asdfasdfa sdf asdf
                  asdf sad sad as asdfasdf asdf asdfasdfa sdfa dsaf asdf
                  asdfasdf asd fasdf asdf asd fasdf asdaf dasfasdfasdfa dasf
                  asdf asdf asdf asdf asdf asdfasdfa dasf asdf asdf asdfas
                  dfasdfasdf asdfasdf asdfasdfasd fasdfasdfasdf asdf asdfasdf
                  asdf asd asd fasd fasd fasd fasdfas daf adsfasdf asdfsadf asdf
                  asdf asdf asdf asdf asdf asdf asdfasdfasd asdf asdf sdaf asdf
                  asdf asdfasdfasdf asdf asdf asdf asdfas dfasd fasd fasdf asdf
                  asdfasdfa sdf asdf asdf sad sad as asdfasdf asdf asdfasdfa
                  sdfa dsaf asdf asdfasdf asd fasdf asdf asd fasdf asdaf
                  dasfasdfasdfa dasf asdf asdf asdf asdf asdf asdfasdfa dasf
                  asdf asdf asdfas dfasdfasdf asdfasdf asdfasdfasd fasdfasdfasdf
                  asdf asdfasdf asdf asd asd fasd fasd fasd fasdfas daf adsfasdf
                  asdfsadf asdf asdf asdf asdf asdf asdf asdf asdfasdfasd asdf
                  asdf sdaf asdf asdf asdfasdfasdf asdf asdf asdf asdfas dfasd
                  fasd fasdf asdf asdfasdfa sdf asdf asdf sad sad as asdfasdf
                  asdf asdfasdfa sdfa dsaf asdf asdfasdf asd fasdf asdf asd
                  fasdf asdaf dasfasdfasdfa dasf asdf asdf asdf asdf asdf
                  asdfasdfa dasf asdf asdf asdfas dfasdfasdf asdfasdf
                  asdfasdfasd fasdfasdfasdf asdf asdfasdf asdf asd asd fasd fasd
                  fasd fasdfas daf adsfasdf asdfsadf asdf asdf asdf asdf asdf
                  asdf asdf asdfasdfasd asdf asdf sdaf asdf asdf asdfasdfasdf
                  asdf asdf asdf asdfas dfasd fasd fasdf asdf asdfasdfa sdf asdf
                  asdf sad sad as asdfasdf asdf asdfasdfa sdfa dsaf asdf
                  asdfasdf asd fasdf asdf asd fasdf asdaf dasfasdfasdfa dasf
                  asdf asdf asdf asdf asdf asdfasdfa dasf asdf asdf asdfas
                  dfasdfasdf asdfasdf asdfasdfasd fasdfasdfasdf asdf asdfasdf
                  asdf asd asd fasd fasd fasd fasdfas daf adsfasdf asdfsadf asdf
                  asdf asdf asdf asdf asdf asdf asdfasdfasd asdf asdf sdaf asdf
                  asdf asdfasdfasdf asdf asdf asdf asdfas dfasd fasd fasdf asdf
                  asdfasdfa sdf asdf asdf sad sad as asdfasdf asdf asdfasdfa
                  sdfa dsaf asdf asdfasdf asd fasdf asdf asd fasdf asdaf
                  dasfasdfasdfa dasf asdf asdf asdf asdf asdf asdfasdfa dasf
                  asdf asdf asdfas dfasdfasdf asdfasdf asdfasdfasd fasdfasdfasdf
                  asdf asdfasdf asdf asd asd fasd fasd fasd fasdfas daf
                </p>
              </div>
            </div>
          </article> */}
        </Carousel>
      </div>
    </>
  )
}

export default Instagram
