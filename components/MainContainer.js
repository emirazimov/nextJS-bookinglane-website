import { Description } from "@material-ui/icons"
import Head from "next/head"
import Script from "next/script"
const MainContainer = ({ children, keywords }) => {
  return (
    <div>
      <Head>
        <title>Bookinglane</title>
        <meta charset="utf-8" />
        <link rel="icon" href="../public/logo.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="theme-color" content="#000000"></meta>
        <meta
          name="keywords"
          content="booking,book,bookinglane,trasnport,transportation,limo software,crm mobile,moile crm,Affiliate Network,Reservation Management, Daily Business Management, Payment Solution, Website Integration, Online Booking Tools, Instant Invoicing, Flight Tracking, Weekly Feature Updates, User Friendly, No Office Required, Run Your Business on the Go, Increased Earnings, Cancel AnytimeDispatch Software , limo software, Limo Dispatch System,  Flight Tracker, Driver Tracker, Limo Dispatching System, Livery Software, Limo Service Scheduling Software, Best Limo Software, online reservations, friendly limo software"
          //   keywords={
          //     "booking,book,bookinglane,trasnport,transportation,book transport,booking transport,crm mobile, moile crm" +
          //     keywords
          //   }
        ></meta>
        <link rel="apple-touch-icon" href="logo.png" />
        <link rel="canonical" href="https://bookinglane.com/" />
        <meta
          name="description"
          content="Comprehensive mobile CRM software for transportation companies. Bookinglane provides solutions that connect your business with clients
        and affiliates, and support your business in the long run - all in your
        smartphone."
        ></meta>
        {/* <meta name="description" content=""></meta> */}
        <meta name="robots" content="all"></meta>
        <meta name="robots" content="max-snippet:-1"></meta>
        <meta name="robots" content="max-image-preview:large"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:title" content="Bookinglane" />
        <meta property="og:url" content="https://bookinglane.com/"></meta>
        <meta property="og:type" content="article"></meta>
        <meta
          property="og:description"
          content="Comprehensive mobile CRM software for transportation companies. Bookinglane provides solutions that connect your business with clients
        and affiliates, and support your business in the long run - all in your
        smartphone."
        ></meta>
        <meta
          property="og:image"
          content="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/AboutUs-min.jpg"
        ></meta>
        {/* <meta property="fb:app_id" content="APPID" /> */}
        <meta property="twitter:title" content="Bookinglane"></meta>
        <meta
          property="twitter:description"
          content="Comprehensive mobile CRM software for transportation companies. Bookinglane provides solutions that connect your business with clients
        and affiliates, and support your business in the long run - all in your
        smartphone."
        ></meta>
        <meta
          property="twitter:image"
          content="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/AboutUs-min.jpg"
        ></meta>
        <meta property="twitter:card" content="summary"></meta>
        {/* <meta
          property="og:image"
          content="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/AboutUs-min.jpg"
        />
        <meta property="og:url" content="https://bookinglane.com/" /> */}
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
    </div>
  )
}

export default MainContainer
