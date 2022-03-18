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
const PartneredWith = dynamic(() => import("../components/PartneredWith"))

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
            <header>
              <Header
                scrollToSectionHeader={scrollToSectionHeader}
                scrollToSectionWhyBookinglane={scrollToSectionWhyBookinglane}
                scrollToSectionPricing={scrollToSectionPricing}
                scrollToSectionAboutUs={scrollToSectionAboutUs}
              />
            </header>
            {/* <Helmet>
            <meta
              name="description"
              content="Comprehensive mobile CRM software for transportation companies"
            />

          </Helmet> */}

            <main>
              <div onScroll={onScroll}>
                <section className="WhyBookinglane">
                  <WhyBookingLane offset={scroll} start={0} end={0.5} />
                </section>
                <section className="Pricing">
                  <Pricing />
                </section>
                <section className="WebsiteWidget">
                  <WebsiteWidget />
                </section>
                {/* <div className="Tutorial">
          <Tutorial />
        </div> */}
                <section className="DownloadMobileApp">
                  <DownloadMobileApp />
                </section>
                <section className="AboutUs">
                  <AboutUs />
                </section>
                {/* <div className="OurTeam">
          <OurTeam />
        </div> */}
                <section className="Instagram">
                  <Instagram />
                </section>
                <section className="PartneredWith">
                  <PartneredWith />
                </section>
              </div>
            </main>
            <footer className="Footer">
              <Footer />
            </footer>
          </div>
        </Provider>
      </MainContainer>
    </>
  )
}

export default App
