import styled from "styled-components"
import { css } from "styled-components"
import {
  FaceBookIconForBody,
  FaceBookIconForBodyMobile,
  InstagramIconForBody,
  InstagramIconForBodyMobile,
  LinkedinIconForBody,
  LinkedinIconForBodyMobile,
  TwitterIconForBody,
  TwitterIconForBodyMobile,
} from "../public/icons"

import AboutUsImg from "../public/AboutUs-min.jpg"
import { useMediaQuery } from "@material-ui/core"
import Image from "next/image"

export const AboutUs = () => {
  const Mobile = useMediaQuery("(max-width: 620px)")
  return (
    <MainContainer>
      <Title>ABOUT US</Title>
      <Content>
        <WrapperWithMargin>
          <ContainerForImg>
            <Img>
              <img
                alt="about us"
                src="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/AboutUs-min.jpg"
                style={{ width: "100%", height: "100%", borderRadius: "8px" }}
              ></img>
            </Img>
          </ContainerForImg>
          <ContainerForText>
            <Text>
              Bookinglane is a family owned business. The founders are
              experienced transportation business owners with extensive industry
              and public accounting expertise. Through firsthand experience of
              7-plus years, the founders were able to identify the key pain
              points for transportation companies and their clients. Together
              they built Bookinglane as a longed-for solution to all challenges
              for business owners, drivers, and customers in the transportation
              industry.
            </Text>
            <Text2>
              As a family, we treat our clients with utmost care and strive for
              your success. Our talented IT team constantly monitors and
              improves our software to ensure your best experience.
            </Text2>
            <Icons>
              <a
                href="https://www.facebook.com/bookinglane"
                style={{ textDecoration: "none" }}
              >
                <ContainerForFacebook>
                  {!Mobile ? (
                    <FaceBookIconForBody />
                  ) : (
                    <FaceBookIconForBodyMobile />
                  )}
                </ContainerForFacebook>
              </a>
              <a
                href="https://twitter.com/bookinglane"
                style={{ textDecoration: "none" }}
              >
                <ContainerForTwitter>
                  {!Mobile ? (
                    <TwitterIconForBody />
                  ) : (
                    <TwitterIconForBodyMobile />
                  )}
                </ContainerForTwitter>
              </a>
              <a
                href="https://www.instagram.com/bookinglane/"
                style={{ textDecoration: "none" }}
              >
                <ContainerForInstagram>
                  {!Mobile ? (
                    <InstagramIconForBody />
                  ) : (
                    <InstagramIconForBodyMobile />
                  )}
                </ContainerForInstagram>
              </a>
              <a
                href="https://www.linkedin.com/company/bookinglane"
                style={{ textDecoration: "none" }}
              >
                <ContainerForLinkedin>
                  {!Mobile ? (
                    <LinkedinIconForBody />
                  ) : (
                    <LinkedinIconForBodyMobile />
                  )}
                </ContainerForLinkedin>
              </a>
            </Icons>
          </ContainerForText>
        </WrapperWithMargin>
        {/* <ContainerForLines>
          <FirstImage>
            <LinesFromRight />
            <SecondImage>
              <BookingLaneBiggestIcon />
            </SecondImage>
          </FirstImage>
        </ContainerForLines> */}
      </Content>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 34px;
  color: black;
  text-align: center;
  margin: 0 0 40px 0;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`
const Content = styled.div`
  /* height: 600px; */
  /* display: flex;
  flex-direction: row; */
`
const WrapperWithMargin = styled.div`
  max-width: 1520px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1301px) {
    margin: 0px 45px;
  }
  @media (max-width: 495px) {
    margin: 0px 20px;
  }
`

const ContainerForImg = styled.div``
const Img = styled.div`
  /* background: url(${AboutUsImg}) center no-repeat;
  background-size: contain; */
  width: 800px;
  height: 540px;
  border-radius: 2.2%;
  @media (max-width: 893px) {
    max-width: 600px;
    max-height: 410px;
  }
  @media (max-width: 631px) {
    max-width: 450px;
    max-height: 290px;
  }
  @media (max-width: 495px) {
    max-width: 350px;
    max-height: 240px;
  }
  @media (max-width: 390px) {
    max-width: 310px;
    max-height: 200px;
  }
`
const ContainerForText = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`
const Text = styled.div`
  font-size: calc(20px + (7 + 7 * 0.7) * ((40vw - 620px) / 1520));
  font-weight: 400;
  line-height: 30px;
  margin-top: 20px;
`
const Text2 = styled.div`
  font-weight: 400;
  font-size: calc(20px + (7 + 7 * 0.7) * ((40vw - 620px) / 1520));
  line-height: 30px;
  margin-top: 20px;
`
const Icons = styled.div`
  width: 220px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const ContainerForFacebook = styled.div`
  /* width: 43px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #4267b2;
  } */
`
const ContainerForTwitter = styled.div`
  width: 43px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: transparent;
`
const ContainerForInstagram = styled.div`
  width: 43px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: transparent;
`
const ContainerForLinkedin = styled.div`
  width: 43px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: transparent;
`

const ContainerForLines = styled.div`
  text-align: right;
`
const FirstImage = styled.div`
  position: relative;
`
const SecondImage = styled.div`
  position: absolute;
  top: -20px;
  right: 190px;
`
