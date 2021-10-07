import { useEffect, useState } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import { Header } from "../components/Header"
import { Helmet } from "react-helmet"
import store from "../redux"

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
        </Helmet>
      </div>
    </Provider>
  )
}

export default App
