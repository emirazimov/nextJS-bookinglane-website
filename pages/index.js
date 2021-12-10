import { useEffect, useState } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import Header from "../components/Header"
import { Helmet } from "react-helmet"
import store from "../redux"
import dynamic from "next/dynamic"
import MainContainer from "../components/MainContainer"
import Script from "next/script"
import { scroller } from "react-scroll"
import { useSpring, animated } from "react-spring"
import { useCallback } from "react"

// const Header = dynamic(() => import("../components/Header"))
const WhyBookingLane = dynamic(() => import("../components/WhyBookingLane"))
const Pricing = dynamic(() => import("../components/Pricing"))
const WebsiteWidget = dynamic(() => import("../components/WebsiteWidget"))
const DownloadMobileApp = dynamic(() =>
  import("../components/DownloadMobileApp")
)
const AboutUs = dynamic(() => import("../components/AboutUs"))
const Instagram = dynamic(() => import("../components/Instagram"))
const Footer = dynamic(() => import("../components/Footer"))

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

function App() {
  const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }))
  const onScroll = useCallback(
    (e) => void set({ scroll: e.target.scrollTop / (window.innerHeight / 2) }),
    []
  )

  return (
    <>
      <MainContainer>
        <Provider store={store}>
          <div className="App">
            <Header
              scrollToSectionHeader={scrollToSectionHeader}
              scrollToSectionWhyBookinglane={scrollToSectionWhyBookinglane}
              scrollToSectionPricing={scrollToSectionPricing}
              scrollToSectionAboutUs={scrollToSectionAboutUs}
            />
            {/* <Helmet>
            <meta
              name="description"
              content="Comprehensive mobile CRM software for transportation companies"
            />

          </Helmet> */}
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
              {/* <div className="Tutorial">
          <Tutorial />
        </div> */}
              <div className="DownloadMobileApp">
                <DownloadMobileApp />
              </div>
              <div className="AboutUs">
                <AboutUs />
              </div>
              {/* <div className="OurTeam">
          <OurTeam />
        </div> */}
              <div className="Instagram">
                <Instagram />
              </div>
              <div className="Footer">
                <Footer />
              </div>
            </div>
          </div>
        </Provider>
      </MainContainer>
    </>
  )
}

export default App
