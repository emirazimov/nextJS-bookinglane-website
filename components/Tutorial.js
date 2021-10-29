// import styled from "styled-components"
// import YouTube from "react-youtube"
// import Box from "@mui/material/Box"
// import Button from "@mui/material/Button"
// import Typography from "@mui/material/Typography"
// import Modal from "@mui/material/Modal"
// import { useState } from "react"

// const YOUTUBE_PLAYLIST_ITEMS_API =
//   "https://www.googleapis.com/youtube/v3/playlistItems"

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   //   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// }

// const Tutorial = () => {
//   const _onReady = (event) => {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo()
//   }
//   const opts = {
//     height: "100%",
//     width: "100%",
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 0,
//     },
//   }
//   const [open, setOpen] = useState(false)
//   const handleOpen = () => setOpen(true)
//   const handleClose = () => setOpen(false)
//   //   const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}`)
//   //   const data = await res.json()
//   return (
//     <MainContainer>
//       <Wrapper>
//         <Title>TUTORIAL</Title>
//         <VideosContainer>
//           <FirstVideo>
//             <Text>Sign up</Text>
//             <Button onClick={handleOpen}>
//               <img src="https://delux-limo.s3.us-east-2.amazonaws.com/preview.png" />
//             </Button>
//             <Modal
//               open={open}
//               onClose={handleClose}
//               aria-labelledby="modal-modal-title"
//               aria-describedby="modal-modal-description"
//             >
//               <Box sx={style}>
//                 <YouTube videoId="Q3wfBURm6vM" opts={opts} onReady={_onReady} />
//               </Box>
//             </Modal>
//           </FirstVideo>
//           <SecondVideo>
//             <Text>Add fleet</Text>
//             <YouTube videoId="Q3wfBURm6vM" opts={opts} onReady={_onReady} />
//           </SecondVideo>
//           <ThirdVideo>
//             <Text>Payment information</Text>
//             <YouTube videoId="Q3wfBURm6vM" opts={opts} onReady={_onReady} />
//           </ThirdVideo>
//           <FourthVideo>
//             <Text>Create Reservation</Text>
//             <YouTube videoId="Q3wfBURm6vM" opts={opts} onReady={_onReady} />
//           </FourthVideo>
//         </VideosContainer>
//       </Wrapper>
//     </MainContainer>
//   )
// }

// export default Tutorial

// const MainContainer = styled.div``
// const Wrapper = styled.div`
//   max-width: 1520px;
//   margin: 0px auto;
// `
// const Title = styled.div`
//   font-size: 34px;
//   font-weight: 700;
//   text-align: center;
//   color: black;
//   margin-bottom: 40px;
// `
// const VideosContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `
// const FirstVideo = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `
// const SecondVideo = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `
// const ThirdVideo = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `
// const FourthVideo = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `
// const Text = styled.span`
//   text-transform: uppercase;
// `
