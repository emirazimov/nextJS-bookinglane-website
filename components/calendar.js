// import { useEffect } from "react"
// // import ApiCalendar from "react-google-calendar-api"

// export const Calendar = () => {
//   var gapi = window.gapi
//   var CALENDAR_ID = "emir.azimov@gmail.com"
//   var CLIENT_ID =
//     "347873932755-pbok0mt5mo7nplp3kff1su1mkedil2ut.apps.googleusercontent.com"
//   var API_KEY = "AIzaSyASj1wgPGJinajKykNxdbxd84qV1C8JnK8"
//   var DISCOVERY_DOCS = [
//     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
//   ]
//   var SCOPESREAD = "https://www.googleapis.com/auth/calendar.readonly"
//   var SCOPES = "https://www.googleapis.com/auth/calendar"
//   // https://calendar.google.com/calendar/u/0?cid=ZW1pci5hemltb3ZAZ21haWwuY29t
//   function getEvents() {
//     let that = this
//     function start() {
//       gapi.client
//         .init({
//           apiKey: API_KEY,
//         })
//         .then(function () {
//           return gapi.client.request({
//             path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
//           })
//         })
//         .then(
//           (response) => {
//             let events = response.result.items
//             that.setState(
//               {
//                 events,
//               },
//               () => {
//                 console.log(that.state.events)
//               }
//             )
//           },
//           function (reason) {
//             console.log(reason)
//           }
//         )
//     }
//     gapi.load("client", start)
//   }
//   useEffect(() => {
//     getEvents()
//   }, [])
//   return <div></div>
// }

// if (ApiCalendar.sign)
//   ApiCalendar.listUpcomingEvents(10).then(({ result }: any) => {
//     console.log(result.items);
//   });
