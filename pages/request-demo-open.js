// import Header from "../components/Header"

import { useEffect, useState } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
// import Header from "../components/Header"
import { Helmet } from "react-helmet"
import store from "../redux"
import dynamic from "next/dynamic"
import MainContainer from "../components/MainContainer"

const RequestDemoOpen = () => {
  const Header = dynamic(() => import("../components/Header"), {
    ssr: false,
  })
  return (
    <MainContainer>
      <Provider store={store}>
        <div className="App">
          <Header routeOpened={true} />
        </div>
      </Provider>
    </MainContainer>
  )
}

export default RequestDemoOpen
