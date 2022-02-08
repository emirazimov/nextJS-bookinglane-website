import { useMediaQuery } from "@material-ui/core"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { css } from "styled-components"
import {
  BookinglaneIconForWidget,
  BookinglaneIconForWidgetOnMobile,
  BookinglaneIconForWidgetOnMobileSmallest,
} from "../public/icons"
// import WidgetWebsite1 from "../public/WidgetWebsite1-min.png"
// import WidgetWebsite2 from "../public/WidgetWebsite2-min.png"
import { useSpring, animated, config } from "react-spring"
import { InView } from "react-intersection-observer"
import React from "react"
import Image from "next/image"

const WebsiteWidget = () => {
  const [showH1, setShowH1] = React.useState(false)
  const onInViewChange = (inview) => {
    if (!showH1 && inview) setShowH1(true)
  }
  const [flip, set] = useState(false)
  const firstImg = useSpring({
    // to: {  },
    from: { opacity: showH1 ? 0 : 1, transform: showH1 && "translateY(120px)" },
    // reset: true,
    // reverse: showH1,
    transform: "translateY(0)",
    opacity: 1,
    delay: 200,
    config: config.molasses,
    duration: 500,
    // onRest: () => set(showH1),
  })
  const secondImg = useSpring({
    // to: {  },
    from: { transform: showH1 && "translateY(120px)", opacity: showH1 ? 0 : 1 },
    // reset: true,
    // reverse: showH1,
    transform: "translateY(0)",
    opacity: 1,
    delay: 700,
    config: config.molasses,
    onRest: () => set(showH1),
  })

  const isMobile = useMediaQuery("(max-width:661px)")
  const isMobileSmallest = useMediaQuery("(max-width:520px)")
  console.log(isMobile)
  const renderBookinglaneicon = () => {
    if (isMobileSmallest) {
      return <BookinglaneIconForWidgetOnMobileSmallest />
    }
    if (!isMobile) {
      return <BookinglaneIconForWidget />
    }
    if (isMobile) {
      return <BookinglaneIconForWidgetOnMobile />
    }
  }
  // useEffect(() => {
  //   renderBookinglaneicon()
  // }, [])
  return (
    <MainContainerWithStyle>
      <Wrapper>
        <Title>WEBSITE WIDGET TOOL</Title>
        <Content>
          <InView tag="div" onChange={onInViewChange}>
            <ImgBlock>
              <Img1>
                <animated.div style={firstImg}>
                  <img
                    src="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/WidgetWebsite1-min.png"
                    alt="widget website"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Icon>
                    <BookinglaneIconForWidget />
                  </Icon>
                </animated.div>
              </Img1>

              <Img2>
                <animated.div style={secondImg}>
                  <img
                    src="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/WidgetWebsite2-min.png"
                    alt="widget website"
                    style={{ width: "100%", height: "100%" }}
                  />
                </animated.div>
              </Img2>
            </ImgBlock>
          </InView>
          <TextBlock>
            <Text>
              Already have your own business website? We have good news for you!
              We’ve created the Bookinglane customized widget and booking page
              that will integrate your website with our app based on your
              preference, so you could easily accept reservations on both ends.
              It’s a win-win for you and your clients.
            </Text>
          </TextBlock>
        </Content>
      </Wrapper>
    </MainContainerWithStyle>
  )
}

const MainContainerWithStyle = styled.div`
  /* height: 950px; */
`
const Wrapper = styled.div`
  max-width: 1520px;
  margin: 0px auto;
  padding-top: 70px;
  padding-bottom: 70px;
  @media (max-width: 1385px) {
    margin: 0px 45px;
  }
  @media (max-width: 620px) {
    margin: 0px 16px;
  }
`
const Title = styled.h3`
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  color: black;
  margin: 0;
  margin-bottom: 40px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
`
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const Text = styled.p`
  width: 55%;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  margin-top: 50px;
  color: black;
  @media (max-width: 1260px) {
    width: 70%;
  }
  @media (max-width: 1011px) {
    width: 100%;
    font-size: calc(20px + (7 + 7 * 0.7) * ((40vw - 620px) / 1520));
    line-height: 28px;
  }
`
const ImgBlock = styled.div`
  /* margin: 0;
  padding: 0; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1385px) {
    justify-content: space-around;
  }
  @media (max-width: 1011px) {
    flex-direction: column;
    align-items: center;
  }
`

const Img1 = styled.div`
  width: 52%;
  height: 52%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  @media (max-width: 1385px) {
    width: 43.5%;
  }
  @media (max-width: 1201px) {
    width: 42.5%;
  }
  @media (max-width: 1011px) {
    width: 70%;
  }
  @media (max-width: 736px) {
    width: 97%;
  }
`
const Icon = styled.div`
  height: 95px;
  width: 95px;
  border-radius: 100%;
  position: absolute;
  padding-left: 13px;
  padding-top: 13px;
  animation: pulse 2s infinite;
  z-index: 1;
  bottom: 74px;
  left: 104px;
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(193, 152, 21);
      box-shadow: 0 0 0 0 rgba(235, 212, 139);
    }

    70% {
      -moz-box-shadow: 0 0 0 10px rgba(216, 170, 24);
      box-shadow: 0 0 0 4.5px rgba(235, 212, 139);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(235, 212, 139);
      box-shadow: 0 0 0 0 rgba(tranparent);
    }
  }
  @media (max-width: 1385px) {
    bottom: 60px;
    right: 80px;
  }
  @media (max-width: 1153px) {
    bottom: 45px;
    right: 65px;
  }
  @media (max-width: 1011px) {
    bottom: 63px;
    right: 93px;
  }
  @media (max-width: 938px) {
    bottom: 60px;
    right: 86px;
  }

  @media (max-width: 840px) {
    bottom: 55px;
    right: 80px;
  }
  @media (max-width: 795px) {
    bottom: 50px;
    right: 70px;
  }
  @media (max-width: 736px) {
    bottom: 60px;
    right: 90px;
  }
  @media (max-width: 661px) {
    bottom: 50px;
    right: 73px;
  }
  @media (max-width: 661px) {
    height: 75px;
    width: 75px;
    bottom: 52px;
    right: 78px;
  }
  @media (max-width: 520px) {
    height: 55px;
    width: 55px;
    bottom: 48px;
    right: 68px;
  }
  @media (max-width: 453px) {
    bottom: 42px;
    right: 60px;
  }
  @media (max-width: 389px) {
    bottom: 37px;
    right: 50px;
  }
  @media (max-width: 337px) {
    bottom: 33px;
    right: 46px;
  }
`
const Img2 = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1385px) {
    width: 43%;
  }
  @media (max-width: 1011px) {
    width: 70%;
  }
  @media (max-width: 736px) {
    width: 97%;
  }
`
// "@keyframes pulse": {
//     "0%": {
//       "-moz-box-shadow": "0 0 0 0 rgba(193,152,21)",
//       "box-shadow": "0 0 0 0 rgba(235,212,139)",
//     },
//     "70%": {
//       "-moz-box-shadow": "0 0 0 10px rgba(216,170,24)",
//       "box-shadow": "0 0 0 7.5px rgba(235,212,139)",
//     },
//     "100%": {
//       "-moz-box-shadow": "0 0 0 0 rgba(235,212,139)",
//       "box-shadow": "0 0 0 0 rgba(235,212,139)",
//     },
//   },
export default WebsiteWidget
