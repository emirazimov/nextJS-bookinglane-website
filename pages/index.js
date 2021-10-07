import { useEffect, useState } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
// import { Header } from "../components/Header"
import { Helmet } from "react-helmet"
import store from "../redux"
import dynamic from "next/dynamic"
const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
})
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Helmet>
          <meta
            name="description"
            content="Comprehensive mobile CRM software for transportation companies"
          />
          {/* https://apis.google.com/js/platform.js */}
        </Helmet>
      </div>
    </Provider>
  )
}

export default App
