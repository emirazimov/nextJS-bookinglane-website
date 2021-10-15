import styled from "styled-components"
import { css } from "styled-components"
import { HeaderBookingIcon, HeaderBookingIconForMobile } from "../public/images"
import Bg from "../public/Bg.svg"
import BgMobilePhoneHeader from "../public/BgMobilePhone-min.png"
import {
  AppstoreIcon,
  AppstoreIconForMobile,
  GooglePlayIcon,
  GooglePlayIconForMobile,
} from "../public/icons"
import React, { useCallback, useRef, useState } from "react"

import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"

import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

import { useMediaQuery } from "@material-ui/core"
import { WhyBookingLane } from "./WhyBookingLane"
import { Pricing } from "./Pricing"
import { WebsiteWidget } from "./WebsiteWidget"
import { DownloadMobileApp } from "./DownloadMobileApp"
// import { Instagram } from "./Instagram"
import { AboutUs } from "./AboutUs"
import { OurTeam } from "./OurTeam"
import { Footer } from "./Footer"
import { scroller } from "react-scroll"
import { AppBar } from "@material-ui/core"
import { useSpring, animated } from "react-spring"
// import { InView } from "react-intersection-observer"
import { getEvents } from "./RequestDemo"
import { useDispatch } from "react-redux"
// import { Calendar, calendar } from "./calendar"
import { ContactUs } from "./ContactUs"
import styles from "../styles/Header.module.scss"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useRouter } from "next/router"
// const imgUrl = require("../public/BgMobilePhone-min.png").default
const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // appBar: {
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  // },
  // appBarShift: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  menuButton: {
    padding: 0,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  appBar: {
    width: "100%",
    position: "sticky",
    filter: "opacity(4)",
    backdropFilter: "blur(6px)",
    "&::-webkit-filter": "opacity(4)",
    "&::-webkit-backdrop-filter": "blur(6px)",
    backgroundColor: "rgba(255, 255, 255, 0.59)",
    "&.MuiPaper-elevation4": {
      boxShadow: "none",
    },
  },
}))

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

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

const Header = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const RequestDemo = dynamic(() => import("./RequestDemo"), {
    ssr: false,
  })
  const ContactUs = dynamic(() => import("./ContactUs"))
  const OurTeam = dynamic(() => import("./OurTeam"), {
    ssr: false,
  })
  const WebsiteWidget = dynamic(() => import("./WebsiteWidget"), {
    ssr: false,
  })
  const Pricing = dynamic(() => import("./Pricing"), {
    ssr: false,
  })

  // const myRef = useRef(null)

  // const executeScroll = () => scrollToRef(myRef)

  const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }))
  const onScroll = useCallback(
    (e) => void set({ scroll: e.target.scrollTop / (window.innerHeight / 2) }),
    []
  )
  const router = useRouter()
  const [openRequestDemo, setOpenRequestDemo] = useState(false)
  const [requestDemoOpen, setRequestDemoOpen] = useState(false)
  const [contactUsOpen, setContactUsOpen] = useState(false)
  const dispatch = useDispatch()
  const isSmallDevice = useMediaQuery("(max-width:1151px)")
  const isMobile = useMediaQuery("(max-width:801px)")
  const smallIcons = useMediaQuery("(max-width: 436px)")

  return (
    <>
      <AppBar className={classes.appBar}>
        <FirstRowContainer>
          <FirstRowInHeader>
            <IconContainer onClick={scrollToSectionHeader}>
              {!isMobile ? (
                <HeaderBookingIcon />
              ) : (
                <HeaderBookingIconForMobile />
              )}
            </IconContainer>
            {!isSmallDevice ? (
              <UlWrapper>
                <Ul>
                  <Li>
                    <Span
                      onClick={() => {
                        getEvents()
                        dispatch({ type: "SET_REQUEST_DEMO", payload: true })
                        setRequestDemoOpen(true)
                        setOpenRequestDemo(!openRequestDemo)
                      }}
                    >
                      REQUEST DEMO
                    </Span>
                  </Li>
                  <Li>
                    <Span onClick={scrollToSectionWhyBookinglane}>
                      WHY BOOKINGLANE
                    </Span>
                  </Li>
                  <Li>
                    <Span onClick={scrollToSectionPricing}>PRICING</Span>
                  </Li>
                  <Li>
                    <Span onClick={scrollToSectionAboutUs}>ABOUT US</Span>
                  </Li>
                  <Li>
                    <Span
                      onClick={() => {
                        dispatch({ type: "SET_CONTUCT_US", payload: true })
                        setContactUsOpen(true)
                      }}
                    >
                      CONTACT US
                    </Span>
                  </Li>
                </Ul>
              </UlWrapper>
            ) : (
              <div className={classes.root}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={classes.menuButton}
                >
                  <MenuIcon style={{ color: "grey" }} />
                </IconButton>

                <Drawer
                  className={classes.drawer}
                  anchor="left"
                  open={open}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                >
                  <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                      {theme.direction === "ltr" ? (
                        <ChevronLeftIcon />
                      ) : (
                        <ChevronRightIcon />
                      )}
                    </IconButton>
                  </div>
                  <UlMobile>
                    <Li>
                      <Span
                        onClick={() => {
                          getEvents()
                          dispatch({ type: "SET_REQUEST_DEMO", payload: true })
                          setRequestDemoOpen(true)
                          setOpenRequestDemo(!openRequestDemo)
                        }}
                      >
                        REQUEST DEMO
                      </Span>
                    </Li>
                    <Li onClick={scrollToSectionWhyBookinglane}>
                      <Span>WHY BOOKINGLANE</Span>
                    </Li>
                    <Li>
                      <Span onClick={scrollToSectionPricing}>PRICING</Span>
                    </Li>
                    <Li>
                      <Span onClick={scrollToSectionAboutUs}>ABOUT US</Span>
                    </Li>
                    <Li>
                      <Span
                        onClick={() => {
                          dispatch({ type: "SET_CONTUCT_US", payload: true })
                          setContactUsOpen(true)
                        }}
                      >
                        CONTACT US
                      </Span>
                    </Li>
                  </UlMobile>
                </Drawer>
              </div>
            )}
          </FirstRowInHeader>
        </FirstRowContainer>
      </AppBar>
      <div className="Header">
        <div className={styles.headerWithBackground}>
          <div className={styles.headerContainer}>
            <SecondRowInHeader>
              <ContainerForTextBlock>
                <Title>
                  Comprehensive mobile CRM software for transportation companies
                </Title>

                <Text>
                  Bookinglane provides solutions that connect your business with
                  clients and affiliates, and support your business in the long
                  run - all in your smartphone.
                </Text>
              </ContainerForTextBlock>
            </SecondRowInHeader>
            <ThirdRowInHeader>
              <ContainerForButtons>
                <a
                  href="https://apps.apple.com/app/id1560973031"
                  style={{ textDecoration: "none" }}
                >
                  <AppStoreButton>
                    {!smallIcons ? <AppstoreIcon /> : <AppstoreIconForMobile />}
                    <ContainerForButtonInterior>
                      <FirstTextForDownloadButtons>
                        Get in on the
                      </FirstTextForDownloadButtons>
                      <SecondTextForDownloadButtons>
                        App Store
                      </SecondTextForDownloadButtons>
                    </ContainerForButtonInterior>
                  </AppStoreButton>
                </a>
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
              </ContainerForButtons>
            </ThirdRowInHeader>
          </div>
        </div>
      </div>
      <div onScroll={onScroll}>
        <div className="WhyBookinglane">
          <WhyBookingLane offset={scroll} start={0} end={0.5} />
        </div>
        <div className="Pricing">
          <Pricing />
        </div>
        <div className="WebsiteWidget">
          <WebsiteWidget />
        </div>
        <div className="DownloadMobileApp">
          <DownloadMobileApp />
        </div>
        <div className="AboutUs">
          <AboutUs />
        </div>
        <div className="OurTeam">
          <OurTeam />
        </div>
        <div className="Footer">
          <Footer />
        </div>
        <ContactUs opened={contactUsOpen} />
        {openRequestDemo ? <RequestDemo opened={requestDemoOpen} /> : null}

        {/* <Calendar /> */}
      </div>
    </>
  )
}

// const fontSize = css`
//   @mixin adaptiv-font($pcSize, $mobSize, $maxWidth) {
//     $addSize: $pcSize - $mobSize;
//     $addMobSize: $addSize + $addSize * 0.7;
//     @media (max-width: 800px) {
//       font-size: calc(
//         #{$mobSize + px} + #{$addMobSize} * ((100vw - 320px) / #{$maxWidth})
//       );
//     }
//     @media (min-width: 800px) {
//       font-size: calc(#{$mobSize + px} + #{$addSize} * (100vw / #{$maxWidth}));
//     }
//   }
// `

const HeaderWithBackground = styled.header`
  /* width: 100%; */
  /* height: 100vh; */
  margin: 0;
  /* padding: 40px 0 0 0; */

  background: url(${Bg}) center top no-repeat;
  background-size: cover;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */

  /* width: 100px;
  height: 100px; */
  margin-top: -90px;
  @media (max-width: 620px) {
    padding-top: 16px;
  }
`
const HeaderContainer = styled.div`
  max-width: 1520px;
  height: 100vh;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url(${BgMobilePhoneHeader}) bottom right no-repeat;
  background-size: 42%;
  background-position-x: 100%;
  background-position-y: 67%;
  @media (max-width: 1720px) {
    background-size: 38%;
  }
  @media (max-width: 1607px) {
    margin: 0px 45px;
    background-size: 40%;
  }
  @media (max-width: 1199px) {
    background-size: 42%;
    background-position-y: 67%;
    background-position-x: 100%;
  }
  @media (max-width: 1024px) {
    height: 690px;
  }
  @media (max-width: 979px) {
    background-position-y: 54%;
  }
  @media (max-width: 900px) {
    height: 800px;
    background: url(${BgMobilePhoneHeader}) bottom no-repeat;
    background-size: 45%;
  }
  @media (max-width: 799px) {
    height: 900px;
    background-size: 51%;
  }
  @media (max-width: 701px) {
    background-size: 56%;
  }

  @media (max-width: 620px) {
    /* background-position-y: 90%; */
    margin: 0 16px;
    background-size: 62%;
  }
  @media (max-width: 561px) {
    background-size: 69%;
  }
  @media (max-width: 497px) {
    background-size: 79%;
  }
  /* @media (max-width: 497px) {
    background-size: 86%;
  } */
  @media (max-width: 415px) {
    background-size: 94%;
  }
  @media (max-width: 375px) {
    background-size: 100%;
  }
  @media (max-width: 353px) {
    background-size: 110%;
  }
`
const IconContainer = styled.span`
  cursor: "pointer";
  /* &:hover {
  } */
`
const FirstRowContainer = styled.div``
const FirstRowInHeader = styled.div`
  /* width: 100%;
  position: relative; */

  /* opacity: 0.2; */
  /* ${IconContainer} {
    opacity: 1;
    filter: blur(10px);
    -webkit-filter: blur(10px);
  } */
  /* &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #efefef;
    /* filter: blur(1px);
    -webkit-filter: blur(1px); */

  max-width: 1520px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  /* -webkit-filter: blur(4px);
  filter: blur(4px); */

  @media (max-width: 1607px) {
    margin: 0 45px;
  }
  @media (max-width: 1151px) {
    align-items: center;
  }
  @media (max-width: 801px) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  @media (max-width: 620px) {
    margin: 0 16px;
  }
`

const UlWrapper = styled.div`
  width: 66%;
`
const Ul = styled.ul`
  width: 74%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  color: black;
  @media (max-width: 1363px) {
    width: 90%;
  }
`
const UlMobile = styled.ul`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  list-style-type: none;
  margin-left: -20px;
`
const Li = styled.li`
  padding: 4px;
  position: relative;
`

const Span = styled.div`
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) scaleX(0);
    -webkit-transform: translateX(-50%) scaleX(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50%;
    width: 96%;
    height: 3px;
    background: #332c4c;
    -webkit-transition: transform 250ms;
    transition: transform 250ms;
  }
  &:hover:after {
    -webkit-transform: translate(-50%) scaleX(1);
    transform: translate(-50%) scaleX(1);
  }
`

const Button = styled.button`
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #422c88;
  color: black;
  cursor: pointer;
`
const SecondRowInHeader = styled.div`
  width: 520px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding-top: 100px; */
  margin-top: 200px;
  /* @media (max-width: 973px) {
    max-width: 370px;
  } */
  @media (max-width: 1441px) {
    margin-top: 170px;
  }
  @media (max-width: 1024px) {
    margin-top: 170px;
  }
  @media (max-width: 900px) {
    width: 100%;
    max-height: 150px;
    align-items: center;
    margin-top: 120px;
  }
  @media (max-width: 587px) {
    width: 100%;
    max-height: 150px;
    align-items: center;
    margin-top: 90px;
    margin-bottom: 20px;
  }
  @media (max-width: 361px) {
    margin-top: 80px;
  }
`
const ContainerForTextBlock = styled.div`
  @media (max-width: 900px) {
    width: 83%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 587px) {
    width: 93%;
  }
  @media (max-width: 438px) {
    width: 100%;
  }
`
const Title = styled.h1`
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: black;
  /* margin-top: -70px; */
  margin-bottom: 30px;
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 973px) {
    font-size: 26px;
    line-height: 34px;
  }
`
const Text = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  color: black;
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 973px) {
    font-size: 18px;
    line-height: 28px;
  }
`
const ThirdRowInHeader = styled.div`
  width: 100%;
  margin-bottom: 100px;
  @media (max-width: 903px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (max-width: 903px) {
  }
`

const ContainerForButtons = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    margin-top: -380px;
  }
  @media (max-width: 620px) {
    margin-top: -453px;
  }
  @media (max-width: 529px) {
    margin-top: -410px;
  }
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
  @media (max-width: 560px) {
    width: 165px;
    height: 65px;
  }
  @media (max-width: 415px) {
    width: 143px;
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
  @media (max-width: 432px) {
    margin-right: 15px;
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
  font-size: calc(18px + (7 + 7 * 0.7) * ((30vw - 720px) / 1520));
  font-weight: 300;
  margin-bottom: 8px;
`
const SecondTextForDownloadButtons = styled.span`
  color: white;
  font-size: calc(20px + (7 + 7 * 0.7) * ((40vw - 600px) / 1520));
  font-weight: 500;
`
// const HeaderIcon = styled.div``
export default Header
