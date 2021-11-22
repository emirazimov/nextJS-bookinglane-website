import { useMediaQuery } from "@material-ui/core"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { scroller } from "react-scroll"
import styled from "styled-components"
import { css } from "styled-components"
import {
  FaceBookIconForFooter,
  FaceBookIconForFooterMobile,
  InstagramIconForFooter,
  InstagramIconForFooterMobile,
  LinkedinIconForFooter,
  LinkedinIconForFooterMobile,
  TwitterIconForFooter,
  TwitterIconForFooterMobile,
} from "../public/icons"
import { HeaderBookingIcon, HeaderBookingIconForMobile } from "../public/images"
import { getEvents } from "./RequestDemo"
import { openPopupWidget } from "react-calendly"

export const Footer = () => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const [contactUsOpen, setContactUsOpen] = useState(false)
  const scrollToSectionHeader = () => {
    scroller.scrollTo("Header", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }

  const scrollToSectionWhyBookinglane = () => {
    scroller.scrollTo("WhyBookinglane", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }
  const scrollToSectionPricing = () => {
    scroller.scrollTo("Pricing", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }
  const scrollToSectionAboutUs = () => {
    scroller.scrollTo("AboutUs", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }
  const dispatch = useDispatch()
  const [requestDemoOpen, setRequestDemoOpen] = useState(false)

  const CustomButton = ({ url, prefill, pageSettings, utm }) => {
    const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm })

    return <Item onClick={onClick}>REQUEST DEMO</Item>
  }

  const isMobile = useMediaQuery("(max-width:787px)")
  const MobileForIcons = useMediaQuery("(max-width: 620px)")
  return (
    <Wrapper>
      <MainContainer>
        <FirstRow>
          <IconContainer onClick={scrollToSectionHeader}>
            {!isMobile ? <HeaderBookingIcon /> : <HeaderBookingIconForMobile />}
          </IconContainer>
          <Menu>
            {/* <Item>REQUEST DEMO</Item> */}
            <CustomButton
              url={"https://calendly.com/bookinglane/demo-call?month=2021-11"}
              pageSettings={{
                height: "100%",
              }}
            />
            <Item onClick={scrollToSectionWhyBookinglane}>WHY BOOKINGLANE</Item>
            <Item onClick={scrollToSectionPricing}>PRICING</Item>
            <Item onClick={scrollToSectionAboutUs}>ABOUT US</Item>
            <Item
              onClick={() => {
                dispatch({ type: "SET_CONTUCT_US", payload: true })
                setContactUsOpen(true)
              }}
            >
              CONTACT US
            </Item>
          </Menu>
          <Icons>
            <a
              href="https://www.facebook.com/bookinglane"
              style={{ textDecoration: "none" }}
            >
              {!MobileForIcons ? (
                <FaceBookIconForFooter />
              ) : (
                <FaceBookIconForFooterMobile />
              )}
            </a>
            <a
              href="https://twitter.com/bookinglane"
              style={{ textDecoration: "none" }}
            >
              {!MobileForIcons ? (
                <TwitterIconForFooter />
              ) : (
                <TwitterIconForFooterMobile />
              )}
            </a>
            <a
              href="https://www.instagram.com/bookinglane/"
              style={{ textDecoration: "none" }}
            >
              {!MobileForIcons ? (
                <InstagramIconForFooter />
              ) : (
                <InstagramIconForFooterMobile />
              )}
            </a>
            <a
              href="https://www.linkedin.com/company/bookinglane"
              style={{ textDecoration: "none" }}
            >
              {!MobileForIcons ? (
                <LinkedinIconForFooter />
              ) : (
                <LinkedinIconForFooterMobile />
              )}
            </a>
          </Icons>
        </FirstRow>
        <SecondRow>
          <Text>Copyright © 2021 Bookinglane LLC. All rights reserved.</Text>
        </SecondRow>
      </MainContainer>
    </Wrapper>
  )
}

const Wrapper = styled.footer``
const MainContainer = styled.div`
  max-width: 1520px;
  margin: 0px auto;
  padding-top: 40px;
  padding-bottom: 30px;
  @media (max-width: 1569px) {
    margin: 0px 45px;
  }
`
const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1433px) {
    justify-content: space-around;
  }
  @media (max-width: 785px) {
    flex-direction: column;
    text-align: center;
  }
`
const IconContainer = styled.div`
  @media (max-width: 1433px) {
    width: 100%;
  }
  @media (max-width: 785px) {
    width: 70%;
  }
  @media (max-width: 506px) {
    width: 100%;
  }
`
const Menu = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Item = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: black;
  cursor: pointer;
  @media (max-width: 1433px) {
    display: none;
  }
`
const Icons = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 786px) {
    margin-top: 26px;
  }
`
const SecondRow = styled.div`
  text-align: center;
  margin-top: 70px;
  @media (max-width: 786px) {
    margin-top: 30px;
  }
`
const Text = styled.span`
  font-weight: 400;
  font-size: calc(15px + (7 + 7 * 0.7) * ((40vw - 620px) / 1520));
  color: black;
`
