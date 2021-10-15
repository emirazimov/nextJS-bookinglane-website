import { Description } from "@material-ui/icons"
import Head from "next/head"
import Script from "next/script"
const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <title>Bookinglane</title>
        <meta charset="utf-8" />
        <link rel="icon" href="../public/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content="booking,book,bookinglane,trasnport,transportation,book transport,booking transport,crm mobile,moile crm"
          //   keywords={
          //     "booking,book,bookinglane,trasnport,transportation,book transport,booking transport,crm mobile, moile crm" +
          //     keywords
          //   }
        ></meta>
        <link rel="apple-touch-icon" href="logo.png" />
        <meta
          name="description"
          content="Comprehensive mobile CRM software for transportation companies."
        ></meta>
        <meta
          name="description"
          content="Bookinglane provides solutions that connect your business with clients
        and affiliates, and support your business in the long run - all in your
        smartphone."
        ></meta>
      </Head>
      <div>{children}</div>
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

export default MainContainer
