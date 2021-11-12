import { useEffect, useState } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
// import Header from "../components/Header"
import { Helmet } from "react-helmet"
import store from "../redux"
import dynamic from "next/dynamic"
import MainContainer from "../components/MainContainer"
import Script from "next/script"
const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
})
function App() {
  return (
    <>
      <MainContainer>
        <Provider store={store}>
          <div className="App">
            <Header />
            {/* <Helmet>
            <meta
              name="description"
              content="Comprehensive mobile CRM software for transportation companies"
            />

          </Helmet> */}
          </div>
        </Provider>
      </MainContainer>
      <Script
        src="https://apis.google.com/js/api.js"
        type="text/javascript"
      ></Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-N6ZS1BMP1J"
      ></Script>
      <Script
        onLoad={() => {
          window.dataLayer = window.dataLayer || []
          function gtag() {
            " "
          }
          {
            dataLayer.push(arguments)
          }
          gtag("js", new Date())
          gtag("config", "G-N6ZS1BMP1J")
        }}
      ></Script>
    </>
  )
}

export default App
