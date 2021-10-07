import styled from "styled-components"
import { css } from "styled-components"

// import InstagramEmbed from "react-instagram-embed"
import whyBookinglane from "../public/WhyBookinglane-min.png"
import React, { forwardRef, useState } from "react"
import { useSpring, animated, config } from "react-spring"
import { InView } from "react-intersection-observer"
import Image from "next/image"
import styles from "../styles/WhyBookinglane.module.scss"

export const WhyBookingLane = forwardRef(({ ref }) => {
  const [showH1, setShowH1] = React.useState(false)
  const onInViewChange = (inview) => {
    if (!showH1 && inview) setShowH1(true)
  }
  const [flip, set] = useState(false)
  const firstText = useSpring({
    // to: {  },
    from: {
      transform: showH1 && "translateX(-200px)",
      opacity: showH1 && 0,
    },
    // reset: true,
    // opacity: showH1 && 1,
    reverse: flip,
    transform: "translateX(0)",
    opacity: 1,
    delay: 200,
    config: config.molasses,
    // onRest: () => set(!flip),
  })
  const secondText = useSpring({
    // to: {  },
    from: {
      transform: showH1 && "translateX(-200px)",
      opacity: showH1 && 0,
    },
    // reset: true,
    reverse: flip,
    transform: "translateX(0)",
    opacity: 1,
    delay: 200,
    config: config.molasses,
    // onRest: () => set(!flip),
  })
  const imgBlock = useSpring({
    // to: {  },
    from: { transform: showH1 && "translateX(200px)", opacity: showH1 && 0 },
    // reset: true,
    reverse: flip,
    transform: "translateX(0)",
    opacity: 1,
    delay: 200,
    config: config.molasses,
    // onRest: () => set(!flip),
  })

  return (
    <>
      <WhyBookingLaneWithBackground ref={ref}>
        <WhyBookingLaneContainerWithMargin>
          <Title>WHY BOOKINGLANE?</Title>

          <div>
            <WhyBookingLaneContainer>
              <TextBlock>
                <InView
                  tag="div"
                  onChange={onInViewChange}
                  threshold={1}
                  initialInView={true}
                >
                  <animated.div style={firstText}>
                    <Text>
                      The limousine and town car industry has been notoriously
                      slow to adopt technological advancements for over 15
                      years. Transportation businesses like yours are
                      continuously losing out on potential revenue as a result
                      of inefficient booking, payment and customer relationship
                      management systems. Bookinglane addresses all of these
                      issues. You can manage your business and increase your
                      earnings with a couple of clicks on your smartphone!
                    </Text>
                  </animated.div>
                </InView>
                <animated.div style={secondText}>
                  <Text>
                    We target helping small and mid-sized businesses like yours
                    to become more visible on the market, develop affiliate
                    networks and subsequently increase your earnings. You don’t
                    need to have access to a computer to manage daily business
                    anymore. Your entire business is in your smartphone. Take
                    your business with you anywhere you go!
                  </Text>
                </animated.div>
              </TextBlock>

              <animated.div style={imgBlock}>
                <ImageBlock>
                  <Img>
                    <Image
                      src={whyBookinglane}
                      // className={styles.whyBookinglaneImage}

                      objectFit="contain"
                    />
                  </Img>
                </ImageBlock>
              </animated.div>
            </WhyBookingLaneContainer>
          </div>
        </WhyBookingLaneContainerWithMargin>
      </WhyBookingLaneWithBackground>
    </>
  )
})

const WhyBookingLaneWithBackground = styled.div`
  display: flex;
  flex-direction: column;

  /* padding: 70px 0 0 90px; */
`
const WhyBookingLaneContainerWithMargin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1520px;
  margin: 0px auto;
  padding-bottom: 30px;
  @media (max-width: 1607px) {
    margin: 0px 45px;
  }
  @media (max-width: 620px) {
    margin: 0px 16px;
  }
`

const Title = styled.span`
  font-weight: 700;
  font-size: 34px;
  color: black;

  margin: 70px 0 40px 0;
  @media (max-width: 990px) {
    margin: 40px 0 40px 0;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`
const WhyBookingLaneContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1339px) {
    flex-direction: column;
  }
`
const TextBlock = styled.div``
const Text = styled.p`
  font-weight: 400;
  font-size: calc(20px + (7 + 7 * 0.7) * ((40vw - 620px) / 1520));
  line-height: 32px;
  margin-bottom: 40px;
  /* opacity: 0; */
  /* visibility: hidden; */
  @media (max-width: 541px) {
    line-height: 26px;
  }
`
const ImageBlock = styled.div`
  width: 100%;
  height: 100%;
`
const Img = styled.div`
  width: 700px;
  height: 450px;

  @media (max-width: 900px) {
    width: 500px;
    height: 350px;
  }
  @media (max-width: 564px) {
    width: 300px;
    height: 250px;
  }
`
// const WhyBookingLaneItemContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   flex-basis: 23.5%;
//   height: 370px;
//   margin-bottom: 100px;
//   box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.08);
// `

// const WhyBookingLaneTitle = styled.span`
//   color: black;
//   font-size: 23px;
//   font-weight: 500;
//   margin-top: 20px;
// `
// const WhyBookingLaneText = styled.p`
//   color: black;
//   font-size: 16px;
//   font-weight: 300;
//   line-height: 24px;
//   padding: 0 30px 45px 30px;
// `
