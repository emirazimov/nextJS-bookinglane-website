import styled from "styled-components"
import { css } from "styled-components"
import firstMobile from "../public/firstMobile-min.png"
import secondMobile from "../public/secondMobile-min.png"
import thirdMobile from "../public/thirdMobile-min.png"
import fourthMobile from "../public/fourthMobile-min.png"
// import mainImg from "../assets/Pricing-min.png"
import { useSpring, animated, config } from "react-spring"
import React, { useState } from "react"
import { InView, useInView } from "react-intersection-observer"
import { CircularProgress, useMediaQuery } from "@material-ui/core"
import checkMark from "../public/checkMark.svg"
import Image from "next/image"

export const Pricing = () => {
  const [showH1, setShowH1] = React.useState(false)
  const onInViewChange = (inview) => {
    if (!showH1 && inview) setShowH1(true)
  }
  const [ref, inView] = useInView({
    threshold: 1,
  })
  const [flip, set] = useState(false)
  const firstImage = useSpring({
    from: {
      width: "320px",
      height: "500px",
      top: showH1 && "-20px",
      left: showH1 && "20px",
      // opacity: 0.7,
    },
    // to: { top: "-60px", left: "250px" },
    zIndex: 7,
    // reverse: flip,
    width: "320px",
    height: "500px",
    position: "absolute",
    opacity: 1,
    top: "-200px",
    left: "280px",
    // background: `url(${firstMobile}) center no-repeat`,
    // backgroundSize: "cover",

    // transform: "translate(20%, -230.5%)",
    delay: 250,
    config: { duration: 800 },
  })
  const secondImage = useSpring({
    // to: {  },
    from: {
      width: "320px",
      height: "500px",
      top: showH1 && "0px",
      left: showH1 && "0px",
      // opacity: 0.7,
    },
    // reset: true,
    width: "320px",
    height: "500px",
    opacity: 1,
    zIndex: 3,
    // reverse: flip,
    position: "absolute",

    top: "-140px",
    left: "173px",
    // transform: "translate(75%, -220.5%)",

    delay: 250,
    config: { duration: 800 },
    // onRest: () => set(!flip),
  })
  const thirdImage = useSpring({
    // to: {},
    from: {
      width: "320px",
      height: "500px",
      top: showH1 && "0px",
      left: showH1 && "0px",
      // opacity: 0.7,
    },
    // reset: true,
    width: "320px",
    height: "500px",
    opacity: 1,

    zIndex: 1,
    position: "absolute",
    top: "-80px",
    left: "80px",

    // reverse: flip,
    // transform: "translate(33%, -10.5%)",
    delay: 250,
    config: { duration: 800 },
    // onRest: () => set(!flip),
  })
  const fourthImage = useSpring({
    // to: {  },
    from: {
      width: "310px",
      height: "500px",
      // transform: "translate(33%, -100.5%)",,
      zIndex: 0,
    },
    // reset: true,
    width: "310px",
    height: "500px",
    position: "absolute",
    reverse: flip,
    zIndex: 0,
    delay: 250,
    config: { duration: 800 },
    // onRest: () => set(!flip),
  })
  const firstImageSmall = useSpring({
    from: {
      width: "250px",
      height: "400px",
      top: showH1 && "0px",
      left: showH1 && "0px",
      // opacity: 0.7,
    },
    // to: { top: "-60px", left: "250px" },
    zIndex: 7,
    // reverse: flip,
    width: "250px",
    height: "400px",
    position: "absolute",
    opacity: 1,
    top: "-140px",
    left: "190px",
    // background: `url(${firstMobile}) center no-repeat`,
    // backgroundSize: "cover",

    // transform: "translate(20%, -230.5%)",
    delay: 250,
    config: { duration: 800 },
  })
  const secondImageSmall = useSpring({
    // to: {  },
    from: {
      width: "250px",
      height: "400px",
      top: showH1 && "0px",
      left: showH1 && "0px",
      // opacity: 0.7,
    },
    // reset: true,
    width: "250px",
    height: "400px",
    opacity: 1,
    zIndex: 3,
    // reverse: flip,
    position: "absolute",

    top: "-100px",
    left: "113px",
    // transform: "translate(75%, -220.5%)",

    delay: 250,
    config: { duration: 800 },
    // onRest: () => set(!flip),
  })
  const thirdImageSmall = useSpring({
    // to: {},
    from: {
      width: "250px",
      height: "400px",
      top: showH1 && "0px",
      left: showH1 && "0px",
      // opacity: 0.7,
    },
    // reset: true,
    width: "250px",
    height: "400px",
    opacity: 1,

    zIndex: 1,
    position: "absolute",
    top: "-60px",
    left: "50px",

    // reverse: flip,
    // transform: "translate(33%, -10.5%)",
    delay: 250,
    config: { duration: 800 },
    // onRest: () => set(!flip),
  })
  const fourthImageSmall = useSpring({
    // to: {  },
    from: {
      width: "240px",
      height: "400px",
      // transform: "translate(33%, -100.5%)",,
      zIndex: 0,
    },
    // reset: true,
    width: "240px",
    height: "400px",
    position: "absolute",
    reverse: flip,
    zIndex: 0,
    delay: 250,
    config: { duration: 800 },
    // onRest: () => set(!flip),
  })

  const firstImageMobile = useSpring({
    from: {
      width: "150px",
      height: "220px",
      top: showH1 && "0px",
      left: showH1 && "0px",
      // opacity: 0.7,
    },
    // to: { top: "-60px", left: "250px" },
    zIndex: 7,
    // reverse: flip,
    width: "150px",
    height: "220px",
    position: "absolute",
    opacity: 1,
    top: "-95px",
    left: "120px",
    // background: `url(${firstMobile}) center no-repeat`,
    // backgroundSize: "cover",

    // transform: "translate(20%, -230.5%)",
    delay: 250,
    config: { duration: 800 },
  })
  const secondImageMobile = useSpring({
    // to: {  },
    from: {
      width: "150px",
      height: "220px",
      top: showH1 && "0px",
      left: showH1 && "0px",
      // opacity: 0.7,
    },
    // reset: true,
    width: "150px",
    height: "220px",
    opacity: 1,
    zIndex: 3,
    // reverse: flip,
    position: "absolute",

    top: "-65px",
    left: "73px",
    // transform: "translate(75%, -220.5%)",

    delay: 250,
    config: { duration: 800 },
    // onRest: () => set(!flip),
  })
  const thirdImageMobile = useSpring({
    // to: {},
    from: {
      width: "150px",
      height: "220px",
      top: showH1 && "0px",
      left: showH1 && "0px",
      // opacity: 0.7,
    },
    // reset: true,
    width: "150px",
    height: "220px",
    opacity: 1,

    zIndex: 1,
    position: "absolute",
    top: "-35px",
    left: "36px",

    // reverse: flip,
    // transform: "translate(33%, -10.5%)",
    delay: 250,
    config: { duration: 800 },
    // onRest: () => set(!flip),
  })
  const fourthImageMobile = useSpring({
    // to: {  },
    from: {
      width: "150px",
      height: "220px",
      // transform: "translate(33%, -100.5%)",,
      zIndex: 0,
    },
    // reset: true,
    width: "150px",
    height: "220px",
    position: "absolute",
    reverse: flip,
    zIndex: 0,
    delay: 250,
    config: { duration: 800 },
    // onRest: () => set(!flip),
  })
  const myLoader = () => {
    return <CircularProgress color="inherit" />
  }
  const renderMobiles = () => {
    if (isMobile) {
      return (
        <>
          <animated.div style={fourthImageMobile}>
            <Img4>
              <Image
                // loader={myLoader}
                src={fourthMobile}
                alt="mobile phones"
                // style={{ width: "100%", height: "100%" }}
                width={"100%"}
                height={"100%"}
              />
            </Img4>
          </animated.div>
          <animated.div style={thirdImageMobile}>
            <Img3>
              <Image
                // loader={myLoader}
                src={thirdMobile}
                alt="mobile phones"
                // style={{ width: "100%", height: "100%" }}
                width={"100%"}
                height={"100%"}
              />
            </Img3>
          </animated.div>
          <animated.div style={secondImageMobile}>
            <Img2>
              <Image
                // loader={myLoader}
                src={secondMobile}
                alt="mobile phones"
                // style={{ width: "100%", height: "100%" }}
                width={"100%"}
                height={"100%"}
              />
            </Img2>
          </animated.div>
          <InView tag="div" onChange={onInViewChange} threshold={1}>
            <animated.div style={firstImageMobile}>
              <Img1>
                <Image
                  // loader={myLoader}
                  src={firstMobile}
                  alt="mobile phones"
                  // style={{ width: "100%", height: "100%" }}
                  width={"100%"}
                  height={"100%"}
                />
              </Img1>
            </animated.div>
          </InView>
        </>
      )
    }
    if (isSmallDevice) {
      return (
        <>
          <animated.div style={fourthImageSmall}>
            <Img4>
              <Image
                // loader={myLoader}
                src={fourthMobile}
                alt="mobile phones"
                // style={{ width: "100%", height: "100%" }}
                width={"100%"}
                height={"100%"}
              />
            </Img4>
          </animated.div>
          <animated.div style={thirdImageSmall}>
            <Img3>
              <Image
                // loader={myLoader}
                src={thirdMobile}
                alt="mobile phones"
                // style={{ width: "100%", height: "100%" }}
                width={"100%"}
                height={"100%"}
              />
            </Img3>
          </animated.div>
          <animated.div style={secondImageSmall}>
            <Img2>
              <Image
                // loader={myLoader}
                src={secondMobile}
                alt="mobile phones"
                // style={{ width: "100%", height: "100%" }}
                width={"100%"}
                height={"100%"}
              />
            </Img2>
          </animated.div>
          <InView tag="div" onChange={onInViewChange} threshold={1}>
            <animated.div style={firstImageSmall}>
              <Img1>
                <Image
                  // loader={myLoader}
                  src={firstMobile}
                  alt="mobile phones"
                  // style={{ width: "100%", height: "100%" }}
                  width={"100%"}
                  height={"100%"}
                />
              </Img1>
            </animated.div>
          </InView>
        </>
      )
    }
    if (!isSmallDevice) {
      return (
        <>
          <animated.div style={fourthImage}>
            {/* <Img4> */}
            <Image
              // loader={myLoader}
              src={fourthMobile}
              alt="mobile phones"
              // style={{ width: "100%", height: "100%" }}
              width={"670%"}
              height={"1053%"}
            />
            {/* </Img4> */}
          </animated.div>
          <animated.div style={thirdImage}>
            {/* <Img3> */}
            <Image
              // loader={myLoader}
              src={thirdMobile}
              alt="mobile phones"
              // style={{ width: "100%", height: "100%" }}
              width={"670%"}
              height={"1053%"}
            />
            {/* </Img3> */}
          </animated.div>
          <animated.div style={secondImage}>
            {/* <Img2> */}
            <Image
              // loader={myLoader}
              src={secondMobile}
              alt="mobile phones"
              // style={{ width: "100%", height: "100%" }}
              width={"670%"}
              height={"1053%"}
            />
            {/* </Img2> */}
          </animated.div>
          <InView tag="div" onChange={onInViewChange} threshold={1}>
            <animated.div style={firstImage}>
              {/* <Img1> */}
              <Image
                // loader={myLoader}
                src={firstMobile}
                alt="mobile phones"
                // style={{ width: "100%", height: "100%" }}
                width={"670%"}
                height={"1053%"}
              />
              {/* </Img1> */}
            </animated.div>
          </InView>
        </>
      )
    }
  }
  const isSmallDevice = useMediaQuery("(max-width:1024px)")
  const isMobile = useMediaQuery("(max-width:575px)")
  return (
    <Wrapper>
      <MainContainer>
        <Title>PRICING</Title>

        <Content>
          <ImgBlock>{renderMobiles()}</ImgBlock>
          {/* <Img src={mainImg} /> */}
          <TextBlock>
            <TextContainer>
              <Price>
                As simple as it is - just $19.99/month plus free trial.
              </Price>
              <CheckMarksBlock>
                <FirstColumn>
                  <ItemContainer>
                    <ImgCheckmark>
                      <Image
                        alt="Early bird pricing"
                        src={checkMark}
                        objectFit="contain"
                      ></Image>
                    </ImgCheckmark>
                    <ItemText>Affiliate Network</ItemText>
                  </ItemContainer>

                  <ItemContainer>
                    <ImgCheckmark>
                      <Image
                        alt="Early bird pricing"
                        src={checkMark}
                        objectFit="contain"
                      ></Image>
                    </ImgCheckmark>
                    <ItemText>Reservation Management</ItemText>
                  </ItemContainer>

                  <ItemContainer>
                    <ImgCheckmark>
                      <Image
                        alt="Early bird pricing"
                        src={checkMark}
                        objectFit="contain"
                      ></Image>
                    </ImgCheckmark>
                    <ItemText>Daily Business Management</ItemText>
                  </ItemContainer>

                  <ItemContainer>
                    <ImgCheckmark>
                      <Image
                        alt="Early bird pricing"
                        src={checkMark}
                        objectFit="contain"
                      ></Image>
                    </ImgCheckmark>
                    <ItemText>Payment Solution</ItemText>
                  </ItemContainer>

                  <ItemContainer>
                    <ImgCheckmark>
                      <Image
                        alt="Early bird pricing"
                        src={checkMark}
                        objectFit="contain"
                      ></Image>
                    </ImgCheckmark>
                    <ItemText>Website Integration</ItemText>
                  </ItemContainer>

                  <ItemContainer>
                    <ImgCheckmark>
                      <Image
                        alt="Early bird pricing"
                        src={checkMark}
                        objectFit="contain"
                      ></Image>
                    </ImgCheckmark>
                    <ItemText>Online Booking Tools</ItemText>
                  </ItemContainer>

                  <ItemContainer>
                    <ImgCheckmark>
                      <Image
                        alt="Early bird pricing"
                        src={checkMark}
                        objectFit="contain"
                      ></Image>
                    </ImgCheckmark>
                    <ItemText>Instant Invoicing </ItemText>
                  </ItemContainer>
                </FirstColumn>

                <SecondColumn>
                  <ItemContainer>
                    <ImgCheckmark>
                      <Image
                        alt="Early bird pricing"
                        src={checkMark}
                        objectFit="contain"
                      ></Image>
                    </ImgCheckmark>
                    <ItemText>Flight Tracking</ItemText>
                  </ItemContainer>

                  <ItemContainer>
                    <ImgCheckmark>
                      <Image
                        alt="Early bird pricing"
                        src={checkMark}
                        objectFit="contain"
                      ></Image>
                    </ImgCheckmark>
                    <ItemText>Weekly Feature Updates</ItemText>
                  </ItemContainer>

                  <ItemContainer>
                    <ImgCheckmark>
                      <Image
                        alt="Early bird pricing"
                        src={checkMark}
                        objectFit="contain"
                      ></Image>
                    </ImgCheckmark>
                    <ItemText>User Friendly</ItemText>
                  </ItemContainer>

                  <ItemContainer>
                    <ImgCheckmark>
                      <Image
                        alt="Early bird pricing"
                        src={checkMark}
                        objectFit="contain"
                      ></Image>
                    </ImgCheckmark>
                    <ItemText>No Office Required</ItemText>
                  </ItemContainer>

                  <ItemContainer>
                    <ImgCheckmark>
                      <Image
                        alt="Early bird pricing"
                        src={checkMark}
                        objectFit="contain"
                      ></Image>
                    </ImgCheckmark>
                    <ItemText>Run Your Business on the Go </ItemText>
                  </ItemContainer>

                  <ItemContainer>
                    <ImgCheckmark>
                      <Image
                        alt="Early bird pricing"
                        src={checkMark}
                        objectFit="contain"
                      ></Image>
                    </ImgCheckmark>
                    <ItemText>Increased Earnings</ItemText>
                  </ItemContainer>

                  <ItemContainer>
                    <ImgCheckmark>
                      <Image
                        alt="Early bird pricing"
                        src={checkMark}
                        objectFit="contain"
                      ></Image>
                    </ImgCheckmark>
                    <ItemText>Cancel Anytime</ItemText>
                  </ItemContainer>
                </SecondColumn>
              </CheckMarksBlock>
            </TextContainer>
          </TextBlock>
        </Content>
      </MainContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #f7f4ff;
`
const MainContainer = styled.div`
  max-width: 1520px;
  margin: 0px auto;
  padding-top: 70px;
  padding-bottom: 70px;
  @media (max-width: 1607px) {
    margin-right: 45px;
  }
  @media (max-width: 1024px) {
    margin-right: auto;
  }
  @media (max-width: 677px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  /* @media (max-width: 620px) {
    margin: 0px 16px;
  } */
`
const Title = styled.div`
  font-weight: 700;
  font-size: 34px;
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
const Img1 = styled.div`
  width: 100%;
  height: 100%;
  /* position: absolute;
  width: 320px;
  height: 500px;
  top: 210px;
  left: 85px;
  z-index: 7; */
  /* transform: translate(40%, -119.5%); */
`
const Img2 = styled.div`
  width: 100%;
  height: 100%;
  /* position: absolute;
  width: 320px;
  height: 500px;
  top: 150px;
  left: 90px;
  z-index: 3; */
  /* transform: translate(-190%, -13%); */
`

const Img3 = styled.div`
  width: 100%;
  height: 100%;
  /* position: absolute; */
  /* background:  left no-repeat;
  background-size: cover;
  background-position-x: 50%;
  height: 800px; */
  /* width: 320px;
  height: 500px;
  top: 70px;
  left: 84px; */
  /* transform: translate(-100%, -7%); */
  /* z-index: 6; */
  /* @media (max-width: 1553px) {
    width: 53%;
  }
  @media (max-width: 1553px) {
  }
  @media (max-width: 1024px) {
    order: 2;
    width: 63%;
  }
  @media (max-width: 811px) {
    width: 73%;
  }
  @media (max-width: 530px) {
    width: 87%;
  } */
`
const Img4 = styled.div`
  width: 100%;
  height: 100%;
  /* position: absolute;
  width: 310px;
  height: 500px;
  top: 59px;
  left: 40px;
  z-index: 0; */
  /* transform: translate(-90%, -7%); */
`
const ImgBlock = styled.div`
  padding: 0;
  margin-top: 200px;
  height: 480px;
  position: relative;
  @media (max-width: 1553px) {
    height: 480px;
  }
  @media (max-width: 1299px) {
    order: 2;
    width: 27%;
    margin-left: -200px;
  }
  @media (max-width: 1024px) {
    order: 2;
    width: 27%;
    margin-left: -350px;
  }
  @media (max-width: 824px) {
    order: 2;
    width: 50%;
    height: 460px;
    margin-left: 0px;
    /* ${Img1} {
      width: 80%;
      height: 80%;
    }
    ${Img2} {
      width: 80%;
      height: 80%;
    }
    ${Img3} {
      width: 80%;
      height: 80%;
    }
    ${Img4} {
      width: 80%;
      height: 80%;
    } */
  }
  @media (max-width: 811px) {
    width: 56%;
  }
  @media (max-width: 703px) {
    width: 69%;
  }
  @media (max-width: 575px) {
    width: 60%;
    height: 220px;
    margin-top: 110px;
    margin-left: 50px;
  }
  @media (max-width: 475px) {
    width: 68%;
    height: 220px;
    margin-top: 110px;
    margin-left: 30px;
  }
  @media (max-width: 400px) {
    width: 77%;
    margin-left: 30px;
  }
  @media (max-width: 375px) {
    width: 90%;
  }
`
// const Img = styled.img`
//   /*
//   background-size: cover;
//   background-position-x: 50%;
//   height: 800px; */
//   width: 46%;
//   @media (max-width: 1553px) {
//     width: 53%;
//   }
//   @media (max-width: 1553px) {
//   }
//   @media (max-width: 1024px) {
//     order: 2;
//     width: 63%;
//   }
//   @media (max-width: 811px) {
//     width: 73%;
//   }
//   @media (max-width: 530px) {
//     width: 87%;
//   }
// `
const TextBlock = styled.div`
  height: 100%;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  /* padding: 40px 40px; */
  /* padding-right: 100px; */

  @media (max-width: 1553px) {
    /* padding-right: 40px; */
  }
  @media (max-width: 1400px) {
    /* padding-right: 100px; */
  }
  @media (max-width: 1299px) {
    order: 1;
  }
  @media (max-width: 1024px) {
    max-width: 100%;
    order: 1;
    margin: 0px 45px;
    padding: 50px 0px;
    padding-bottom: 20px;
  }
  @media (max-width: 867px) {
    max-width: 90%;
  }
  @media (max-width: 818px) {
    height: 100%;
  }
  @media (max-width: 713px) {
  }
  @media (max-width: 629px) {
    max-width: 100%;
    height: 100%;
  }
  @media (max-width: 620px) {
    margin: 0 16px;
  }
  @media (max-width: 519px) {
    max-width: 400px;
    padding-top: 25px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 689px) {
    align-items: flex-start;
  }
`
// const TextBlockTitle = styled.span`
//   font-weight: normal;
//   font-size: 24px;
// `

const Price = styled.span`
  font-weight: 600;
  line-height: 33px;
  font-size: calc(21px + (7 + 7 * 0.7) * ((46vw - 620px) / 1520));
  margin-bottom: 30px;
`

const CheckMarksBlock = styled.div`
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 689px) {
    flex-direction: column;

    margin-bottom: 250px;
  }
  @media (max-width: 577px) {
    margin-bottom: 300px;
  }
  @media (max-width: 420px) {
    padding-left: 15px;
  }
`
const FirstColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const SecondColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ItemContainer = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const ImgCheckmark = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 18px;
`
const ItemText = styled.div`
  font-weight: 600;
  font-size: 16px;
`
// const Text = styled.span`
//   font-weight: 400;
//   font-size: calc(20px + (7 + 7 * 0.7) * ((46vw - 620px) / 1520));
//   line-height: 24px;
// `
