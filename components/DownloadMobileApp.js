import styled from "styled-components"
import { css } from "styled-components"
// import DownloadMobileAppImg2 from "../public/DownloadMobileApp-min.png"
import {
  AppstoreIcon,
  AppstoreIconForMobile,
  GooglePlayIcon,
  GooglePlayIconForMobile,
} from "../public/icons"
import { useMediaQuery } from "@material-ui/core"
import ScrollAnimation from "react-animate-on-scroll"
import Image from "next/image"

const DownloadMobileApp = () => {
  const smallIcons = useMediaQuery("(max-width: 436px)")
  return (
    <MainContainerWithStyle>
      <Wrapper>
        <Content>
          <TextAndReferences>
            <Title>DOWNLOAD OUR MOBILE APP</Title>
            <ContainerForButtons>
              {/* <ScrollAnimation animateIn="fadeInLeft" duration={3} delay={300}> */}
              <a
                href="https://apps.apple.com/app/id1560973031"
                style={{ textDecoration: "none" }}
              >
                <AppStoreButton>
                  {!smallIcons ? <AppstoreIcon /> : <AppstoreIconForMobile />}
                  <ContainerForButtonInterior>
                    <FirstTextForDownloadButtons>
                      GET IT ON THE
                    </FirstTextForDownloadButtons>
                    <SecondTextForDownloadButtons>
                      App Store
                    </SecondTextForDownloadButtons>
                  </ContainerForButtonInterior>
                </AppStoreButton>
              </a>
              {/* </ScrollAnimation> */}
              {/* <ScrollAnimation animateIn="fadeInRight"> */}
              <a
                href="https://play.google.com/store/apps/details?id=com.bookinglane.manager"
                style={{ textDecoration: "none" }}
              >
                <GooglePlayButton>
                  {!smallIcons ? (
                    <GooglePlayIcon />
                  ) : (
                    <GooglePlayIconForMobile />
                  )}
                  <ContainerForButtonInterior>
                    <FirstTextForDownloadButtons>
                      Download on the
                    </FirstTextForDownloadButtons>
                    <SecondTextForDownloadButtons>
                      Google Play
                    </SecondTextForDownloadButtons>
                  </ContainerForButtonInterior>
                </GooglePlayButton>
              </a>
              {/* </ScrollAnimation> */}
            </ContainerForButtons>
          </TextAndReferences>
          {/* <ScrollAnimation animateIn="animate__fadeIn"> */}
          <ImgBlock>
            <img
              src="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/DownloadMobileApp-min.png"
              alt="Download Mobile App"
              style={{ width: "100%", height: "100%" }}
            />
          </ImgBlock>
          {/* </ScrollAnimation> */}
        </Content>
      </Wrapper>
    </MainContainerWithStyle>
  )
}

const MainContainerWithStyle = styled.div`
  height: 410px;
  background: #f6f4ff;
  @media (max-width: 1131px) {
    height: 100%;
  }
`
const Wrapper = styled.div`
  max-width: 1350px;
  margin: 0px auto;
  @media (max-width: 1457px) {
    margin-left: 45px;
  }
  @media (max-width: 679px) {
    margin-left: 0px;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding-top: 170px; */
  @media (max-width: 679px) {
    flex-direction: column;
  }
`
const TextAndReferences = styled.div`
  height: 230px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 903px) {
    height: 130px;
  }
  @media (max-width: 679px) {
    order: 2;
    height: 110px;
    margin-bottom: 30px;
  }
`

const Title = styled.span`
  font-weight: 700;
  font-size: 28px;
  color: black;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
`
const Text = styled.span`
  font-size: 24px;
  color: black;
`
const ContainerForButtons = styled.div`
  display: flex;
  flex-direction: row;
`

const CommonButtonStyles = css`
  width: 250px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  border-radius: 17px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transition: 0.4s;
  }
  @media (max-width: 1307px) {
    width: 175px;
    height: 75px;
  }
  @media (max-width: 903px) {
    width: 165px;
    height: 75px;
  }
  @media (max-width: 437px) {
    width: 145px;
    height: 60px;
  }
`

const AppStoreButton = styled.button`
  ${CommonButtonStyles}
  margin-right:40px;

  position: relative;

  overflow: hidden;

  /* &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 10px;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
  } */
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: -200px;
    width: 100%;
    height: 100%;
    transform: rotate(120deg);
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: 0.5s;
    transition-delay: 0.15s;
  }
  &:hover:after {
    left: 80%;
  }
  a span {
    position: absolute;
    display: block;
    transition: 0.5s ease;
  }
  @media (max-width: 781px) {
    margin-right: 25px;
  }
  @media (max-width: 360px) {
    margin-right: 10px;
  }
`
const GooglePlayButton = styled.button`
  ${CommonButtonStyles}

  position: relative;

  overflow: hidden;

  /* &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 10px;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
  } */
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: -200px;
    width: 100%;
    height: 100%;
    transform: rotate(120deg);
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: 0.5s;
    transition-delay: 0.15s;
  }
  &:hover:after {
    left: 80%;
  }
  a span {
    position: absolute;
    display: block;
    transition: 0.5s ease;
  }
`

const ContainerForButtonInterior = styled.div`
  display: flex;
  flex-direction: column;
`
const FirstTextForDownloadButtons = styled.span`
  color: white;
  font-size: calc(17px + (7 + 7 * 1) * ((40vw - 720px) / 1520));
  font-weight: 300;
  margin-bottom: 8px;
`
const SecondTextForDownloadButtons = styled.span`
  color: white;
  font-size: calc(20px + (7 + 7 * 0.7) * ((40vw - 600px) / 1520));
  font-weight: 500;
`

const ImgBlock = styled.div`
  margin: 0;
  padding: 0;
  @media (max-width: 679px) {
    order: 1;
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`

export default DownloadMobileApp
