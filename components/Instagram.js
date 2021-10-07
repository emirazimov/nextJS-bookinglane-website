// import InstagramEmbed from 'react-instagram-embed'
import React, { useState, useEffect } from "react"

const url = `https://www.instagram.com/graphql/query/?query_hash=dbdfd83895d23a4a0b0f68a85486e91c&variables={"id":"1554310719","first": 4}`

async function getData() {
  const data = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
    },
  }).then((res) => res.json())
  console.log(data)
  return data
}

export const Instagram = () => {
  const [gramz, setGramz] = useState([])
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
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div>
        <InstagramEmbed
          url="https://www.instagram.com/p/B2JnvKCAv-Htby8d7EKxUNwpmET7-VduOl8oMQ0/"
          clientAccessToken="1574806216244463|7e3c37a26fe83c2ed5e93f6581742a15"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    </>
  )
}
