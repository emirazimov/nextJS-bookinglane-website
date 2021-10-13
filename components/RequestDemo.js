// import DateFnsUtils from "@date-io/date-fns"
import {
  // Button,
  CircularProgress,
  Dialog,
  FormControl,
  FormHelperText,
  ListItem,
  MenuItem,
  // OutlinedInput,
  Select,
  // useMediaQuery,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
// import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
// import { Calendar } from "@material-ui/pickers"
import moment from "moment-timezone"
import { lazy, useEffect, useState } from "react"
import styled from "styled-components"
// import { css } from "styled-components"
// import { DateInputControl } from "./CustomInputs"
import DialogTitle from "@material-ui/core/DialogTitle"
import { useDispatch, useSelector } from "react-redux"
import closeIcon from "../public/CloseIcon.svg"
// import ReCAPTCHA from "react-google-recaptcha"
import Calendar from "react-calendar"
import styles from "../styles/RequestDemo.module.scss"
import { Checkmark } from "./Helpers/Checkmark"
import { gapi } from "gapi-script"
import Image from "next/image"
// import { setCountries } from "../redux/sagas"
// import { funcName, GetCountries } from "../api/api"
// import ToggleButton from "@material-ui/lab/ToggleButton"
// import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"

// var gapi

var usersTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone

var clientTimezoneOffset = new Date().getTimezoneOffset() / -60
console.log(clientTimezoneOffset)

var CLIENT_ID =
  "303724495734-mv4rp9400nblbbk3fhpabku018tn50r9.apps.googleusercontent.com"
var CALENDAR_ID = "dl2tk9fqumnrpe6lbsphisq2o8@group.calendar.google.com"
var API_KEY = "AIzaSyDNu5iU7nglZFmtUdT9No_RiJUxkVr8QfE"
// var DISCOVERY_DOCS = [
//   "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
// ]
// var SCOPESREAD = "https://www.googleapis.com/auth/calendar.readonly"
// var SCOPES = "https://www.googleapis.com/auth/calendar"

var events = []
export const getEvents = () => {
  // gapi.load('client:auth2', () => {
  //   gapi.client.init({
  //     apiKey: API_KEY,
  //     clientId: CLIENT_ID,
  //     discoveryDocs: DISCOVERY_DOCS,
  //     scope: SCOPES,
  //   })
  //   // window.gapi.auth2.authorize(
  //   //   { client_id: CLIENT_ID, scope: SCOPES },
  //   //   (res) => {
  //   //     if (res) {
  //   //       if (res.access_token) {
  //   //         localStorage.setItem("access_token", res.access_token)
  //   //       }
  //   //     }
  //   //   }
  //   // )
  //   gapi.client.load('calendar', 'v3')
  //   gapi.auth2
  //     .getAuthInstance()
  //     .signIn()
  //     .then(() => {
  //       gapi.client.calendar.events
  //         .list({
  //           calendarId: 'primary',
  //           timeMin: new Date().toISOString(),
  //           showDeleted: false,
  //           singleEvents: true,
  //           maxResults: 10,
  //           orderBy: 'startTime',
  //         })
  //         .then((response) => {
  //           const eventsres = response.result.items
  //           eventsres.map((item) => {
  //             events.push(item.start.dateTime)
  //           })
  //         })
  //     })
  // })
  // let that = this
  // function start() {
  //   var d = new Date().toISOString()
  //   gapi.client
  //     .init({
  //       apiKey: API_KEY,
  //     })
  //     .then(function () {
  //       return gapi.client.request({
  //         path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true&timeMin=${d}`,
  //       })
  //     })
  //     .then(
  //       (response) => {
  //         let eventsres = response.result.items
  //         eventsres.map((item) => {
  //           events.push(item.start.dateTime)
  //         })
  //         // console.log(eventsres)
  //         // that.setState(
  //         //   {
  //         //     eventsres,
  //         //   },
  //         //   () => {
  //         //     console.log(that.state.events)
  //         //   }
  //         // )
  //       }
  //       // function (reason) {
  //       //   console.log(reason)
  //       // }
  //     )
  // }
  // gapi.load("client", start)
}

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: "100%",
  //   maxWidth: 360,
  //   backgroundColor: theme.palette.background.paper,
  // },

  activeStart: {
    backgroundColor: "red",
  },
  listItemStart: {
    width: "120px",
    height: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "6px",
    marginLeft: "6px",
    backgroundColor: "#261952",
    borderRadius: "8px",
    fontSize: "16px",
    // border: "#261952 solid 1px",
    color: "white",
    transition: "0.3s",
    cursor: "pointer",
    // "&:hover":
    //  {
    //   cursor: "pointer",
    //   border: "#261952 solid 1px",
    //   backgroundColor: "#ece9f5",
    //   color: "black"
    //   /* #301470 */
    // },
    // &:active {
    //   background-color: #301470;
    //   color: white;
    // }
    // &:focus {
    //   background-color: #301470;
    //   color: white;
    // }
    "@media (max-width: 664px)": {
      width: "110px",
      height: "45px",
    },
    // width: "50%",
    // margin: 0,
    // padding: 0,
  },
  listRootStart: {
    "&.MuiListItem-root.Mui-selected, &.MuiListItem-root.Mui-selected:hover": {
      backgroundColor: "#301470",
    },
  },

  activeEnd: {
    backgroundColor: "red",
  },
  listItemEnd: {
    width: "120px",
    height: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "6px",
    marginLeft: "6px",
    backgroundColor: "#261952",
    borderRadius: "8px",
    fontSize: "16px",
    // border: "#261952 solid 1px",
    color: "white",
    transition: "0.3s",
    cursor: "pointer",
    // "&:hover":
    //  {
    //   cursor: "pointer",
    //   border: "#261952 solid 1px",
    //   backgroundColor: "#ece9f5",
    //   color: "black"
    //   /* #301470 */
    // },
    // &:active {
    //   background-color: #301470;
    //   color: white;
    // }
    // &:focus {
    //   background-color: #301470;
    //   color: white;
    // }
    "@media (max-width: 664px)": {
      width: "110px",
      height: "45px",
    },
    // width: "50%",
    // margin: 0,
    // padding: 0,
  },
  listRootEnd: {
    "&.MuiListItem-root.Mui-selected, &.MuiListItem-root.Mui-selected:hover": {
      backgroundColor: "#301470",
    },
  },

  activeDisabled: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  listItemDisabled: {
    margin: 0,
    padding: 0,
  },
  listRootDisabled: { margin: 0, padding: 0 },

  listItem: {
    margin: 0,
    padding: 0,
  },
  selectMenu: {
    height: "50px",

    borderRadius: "9px",
    marginTop: "10px",
    marginBottom: "37px",
    border: "1px solid black",
    underline: {
      "&&:before": {
        borderBottom: "none",
      },
      "&&:after": {
        borderBottom: "none",
      },
    },
  },
  selectControl: {
    height: "34px",
    paddingLeft: "17px",
    paddingTop: "21px",
    borderRadius: "9px",
    "&.MuiSelect-select.MuiSelect-select": {
      backgroundColor: "transparent",
    },
  },
}))

const RequestDemo = ({ opened }) => {
  // const [events, setEvents] = useState([])
  // const [selectedDate, setSelectedDate] = useState([])
  const classes = useStyles()

  const [checkmark, setCheckmark] = useState(false)
  const [flagForPreloaderSubmit, setFlagForPreloaderSubmit] = useState(false)
  const [transparentBg, setTransparentBg] = useState(false)

  const [country, setCountry] = useState("")

  const handleChangeCountry = (event) => {
    setCountry(event.target.value)
    console.log(country)
  }

  const addEventToBackend = (
    firstName,
    lastName,
    email,
    startDateTime,
    endDateTime,
    countryId
  ) => {
    if (clientChoiceStart && selectedDateForSubmit) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: `${firstName}`,
          lastName: `${lastName}`,
          businessName: `${businessName}`,
          email: `${email}`,
          startDateTime: `${startDateTime}`,
          endDateTime: `${endDateTime}`,
          timeZoneId: `${usersTimezone}`,
          offset: `${clientTimezoneOffset}`,
          countryId: `${countryId}`,
        }),
      }
      setTransparentBg(true)
      setFlagForPreloaderSubmit(true)
      fetch(
        "https://apidev.bookinglane.com/api/googleapi/event-google-calendar",
        requestOptions
      ).then((response) => {
        setFlagForPreloaderSubmit(false)
        setCheckmark(true)
        console.log(response)
      })
    } else {
      if (!clientChoiceStart) {
        setRedErrorTimes(true)
      } else {
        setRedErrorTimes(false)
      }
      if (!selectedDateForSubmit) {
        setRedErrorCalendar(true)
      } else {
        setRedErrorCalendar(false)
      }
      if (hasError) {
        setHasError(true)
      } else {
        setHasError(false)
      }
    }
    // .then((data) => this.setState({ postId: data.id }))
  }

  useEffect(() => {}, [])
  // const [flag, setFlag] = useState(false)

  // const [open, setOpen] = useState(opened)

  // const handleClose = (value) => {
  //   setOpen(false)
  // }
  const [selectedDateForSubmit, setSelectedDateForSubmit] = useState(null)
  const [firstName, setFirstName] = useState(null)
  const [businessName, setBusinessName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [clientChoiceStart, setClientChoiceStart] = useState(null)
  const [clientChoiceEnd, setClientChoiceEnd] = useState(null)
  const [email, setEmail] = useState(null)
  // const [localCalendarEvent, setLocalCalendarEvent] = useState(null)
  const requestDemo = useSelector((store) => store.requestDemo.trigger)
  const gotCountries = useSelector((store) => store.countriesApi.countries)
  const dispatch = useDispatch()
  // const isMobile = useMediaQuery("(max-width: 664px)")
  const [times, setTimes] = useState([
    ["10:00 AM", "10:30 AM"],
    ["12:00 PM", "12:30 PM"],
    ["2:00 PM", "2:30 PM"],
    ["4:00 PM", "4:30 PM"],
    ["6:00 PM", "6:30 PM"],
  ])
  const [times2, setTimes2] = useState([
    ["10:00 AM", "10:30 AM"],
    ["12:00 PM", "12:30 PM"],
    ["2:00 PM", "2:30 PM"],
    ["4:00 PM", "4:30 PM"],
    ["6:00 PM", "6:30 PM"],
  ])
  // var times3 = [
  //   ["10:00 AM", "10:30 AM"],
  //   ["12:00 PM", "12:30 PM"],
  //   ["2:00 PM", "2:30 PM"],
  //   ["4:00 PM", "4:30 PM"],
  //   ["6:00 PM", "6:30 PM"],
  // ]

  // const [disableTime, setDisableTime] = useState(false)
  // const [bg, setBg] = useState(false)
  // const [bgItem, setBgItem] = useState(null)
  const [bgItemStart, setBgItemStart] = useState(null)
  const [bgItemEnd, setBgItemEnd] = useState(null)
  // const [bgIndex, setBgIndex] = useState(null)
  const today = new Date()
  const tomorrow = new Date(today)
  const ToTomorrow = new Date(tomorrow)
  const [flagForPreloader, setFlagForPreloader] = useState(false)
  const [availableTimes, setAvailableTimes] = useState(false)
  tomorrow.setDate(tomorrow.getDate() + 1)
  ToTomorrow.setDate(tomorrow.getDate() + 1)
  // var ref = null
  // const time = ["2021-09-02T17:00:00+06:00", "2021-09-03T10:00:00"]

  // const setSelectedDateForSubmitHandler = (event) => {
  //   setSelectedDateForSubmit(new Date(event).toISOString().split("T")[0])
  //   // console.log(selectedDateForSubmit)
  // }
  const [redErrorCalendar, setRedErrorCalendar] = useState(false)
  const [redErrorTimes, setRedErrorTimes] = useState(false)

  const disabling = (disable) => {
    const res = [
      ["10:00 AM", "10:30 AM"],
      ["12:00 PM", "12:30 PM"],
      ["2:00 PM", "2:30 PM"],
      ["4:00 PM", "4:30 PM"],
      ["6:00 PM", "6:30 PM"],
    ]
    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < disable.length; j++) {
        if (res[i][0] == disable[j][0]) {
          res[i].push("disable")
        }
      }
    }
    return setTimes2(res)
  }

  const [disableToday, setDisableToday] = useState(true)

  const calendarClickHandler = (
    event = moment().tz("America/Los_Angeles").format()
  ) => {
    setSelectedDateForSubmit(moment(event).format("YYYY-MM-DD"))

    function start() {
      setFlagForPreloader(true)
      var d = moment().tz("America/Los_Angeles").format()
      gapi.client
        .init({
          apiKey: API_KEY,
        })
        .then(() => {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true&timeMin=${d}`,
          })
        })
        .then(
          (response) => {
            setFlagForPreloader(false)
            let eventsres = response.result.items
            // console.log(eventsres)
            eventsres.map((item) => {
              events.push(item.start.dateTime)
            })

            var today = new Date(event)
            var dd = String(today.getDate()).padStart(2, "0")
            var mm = String(today.getMonth() + 1).padStart(2, "0") //January is 0!
            var yyyy = today.getFullYear()
            today = yyyy + "-" + mm + "-" + dd

            const res = events.filter((item) => {
              return (
                moment(item).tz("America/Los_Angeles").format("YYYY-MM-DD") ==
                today
              )
            })
            const removeRepeat = res.filter((v, i, a) => a.indexOf(v) === i)

            // const time = [...res]
            const disable = times.filter((item) => {
              return (
                item[0] ==
                  moment(removeRepeat[0])
                    .tz("America/Los_Angeles")
                    .format("h:mm A") ||
                item[1] ==
                  moment(removeRepeat[0])
                    .tz("America/Los_Angeles")
                    .format("h:mm A") ||
                item[0] ==
                  moment(removeRepeat[1])
                    .tz("America/Los_Angeles")
                    .format("h:mm A") ||
                item[1] ==
                  moment(removeRepeat[1])
                    .tz("America/Los_Angeles")
                    .format("h:mm A") ||
                item[0] ==
                  moment(removeRepeat[2])
                    .tz("America/Los_Angeles")
                    .format("h:mm A") ||
                item[1] ==
                  moment(removeRepeat[2])
                    .tz("America/Los_Angeles")
                    .format("h:mm A") ||
                item[0] ==
                  moment(removeRepeat[3])
                    .tz("America/Los_Angeles")
                    .format("h:mm A") ||
                item[1] ==
                  moment(removeRepeat[3])
                    .tz("America/Los_Angeles")
                    .format("h:mm A") ||
                item[0] ==
                  moment(removeRepeat[4])
                    .tz("America/Los_Angeles")
                    .format("h:mm A") ||
                item[1] ==
                  moment(removeRepeat[4])
                    .tz("America/Los_Angeles")
                    .format("h:mm A")
              )
            })
            // console.log(disable)
            // var res2 = times.filter((item) => {
            //   return (
            //     item.toString() !== disable[0]?.toString() &&
            //     item.toString() !== disable[1]?.toString() &&
            //     item.toString() !== disable[2]?.toString() &&
            //     item.toString() !== disable[3]?.toString() &&
            //     item.toString() !== disable[4]?.toString() &&
            //     item.toString() !== disable[5]?.toString()
            //   )
            // })
            // if (res2.length == 0) {
            //   setAvailableTimes(true)
            // } else {
            //   setAvailableTimes(false)
            // }
            // setSelectedDate(res.filter((v, i, a) => a.indexOf(v) === i))
            // if (!res2) {
            //   setTimes2(times3)
            // } else {
            //   setTimes2(res2)
            // }
            disabling(disable)
            console.log(times2, disable)
            if (event == FormatUsaTime) {
              setDisableToday(true)
            } else {
              setDisableToday(false)
            }

            // events = []
          }
          // function (reason) {
          //   console.log(reason)
          // }
        )
    }
    gapi.load("client", start)
    // console.log(events)
  }
  const [emailError, setEmailError] = useState("")
  const emailHandler = (e) => {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    )

    if (!pattern.test(String(e.target.value).toLowerCase())) {
      setEmailError("Please enter a valid email address")
    } else {
      setEmailError("")
    }
  }

  var usaTime = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  })
  // const disableWeekends = (date) => {}
  var FormatUsaTime = new Date(usaTime)
  console.log(FormatUsaTime)

  // var pstDate = moment().tz("America/Los_Angeles").format()
  // var emir = new Date(pstDate).toUTCString()
  // var emir2 = new Date(Date.parse(pstDate))
  // var d = new Date()
  // var n = d.getTimezoneOffset()
  // var g = d.setMinutes(d.getMinutes() - n)
  // var e = new Date(g)
  // const [alignment, setAlignment] = useState("left")

  // const handleChange = (event, newAlignment) => {
  //   setAlignment(newAlignment)
  // }
  const [hasError, setHasError] = useState(null)
  useEffect(() => {
    if (requestDemo) {
      calendarClickHandler(FormatUsaTime)
    }
  }, [])
  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        // onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={requestDemo}
        // style={{ height: "100vh" }}
      >
        <DialogTitle
          style={{
            marginTop: "20px",
          }}
        >
          <ContainerForTitle>
            <Text>Schedule a 15 - Minute Demo Call (Pacific Time Zone)</Text>
            <CloseIcon
              onClick={() => {
                dispatch({ type: "SET_REQUEST_DEMO", payload: false })
                setDisableToday(true)
              }}
            >
              <Image src={closeIcon} width={"20px"} height={"20px"} />
            </CloseIcon>
          </ContainerForTitle>
        </DialogTitle>
        <Wrapper>
          <Container transparentBg={transparentBg}>
            <Form
              onSubmit={(event) => {
                addEventToBackend(
                  firstName,
                  lastName,
                  email,
                  selectedDateForSubmit + "T" + clientChoiceStart,
                  selectedDateForSubmit + "T" + clientChoiceEnd,
                  country
                )
                event.preventDefault()
              }}
            >
              <FormControl className={classes.formControl} error={hasError}>
                <CalendarSection>
                  <CalendarBlock>
                    <RedErrorCalendar redErrorCalendar={redErrorCalendar}>
                      <Calendar
                        // date={new Date()}
                        // value={new Date()}
                        defaultValue={FormatUsaTime}
                        minDate={FormatUsaTime}
                        tileDisabled={({ date }) => {
                          // console.log(date.getDate())
                          return date.getDay() === 0 || date.getDay() === 6
                        }}
                        calendarType={"US"}
                        // disablePast
                        onClickDay={(event) => {}}
                        onChange={(event) => {
                          // setSelectedDateForSubmitHandler(event)
                          calendarClickHandler(event)
                        }}
                        // activeStartDate={new Date()}
                        className={styles.reactCalendar}
                      />
                    </RedErrorCalendar>
                  </CalendarBlock>
                  {flagForPreloader ? (
                    <div
                      style={{
                        width: "257px",
                        height: "250px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress />
                    </div>
                  ) : (
                    <>
                      {availableTimes ? (
                        <div
                          style={{
                            width: "100%",
                            textAlign: "center",
                            paddingTop: "10px",
                            fontSize: "18px",
                            color: "grey",
                          }}
                        >
                          No available time
                        </div>
                      ) : (
                        <RedErrorTimes redErrorTimes={redErrorTimes}>
                          <TimesBlock>
                            {disableToday && (
                              <>
                                <span
                                  style={{
                                    margin: 0,
                                    padding: 0,
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <ListItem
                                    className={classes.listItemDisabled}
                                    // key={index}
                                    disabled={true}
                                    // classes={{
                                    //   root: classes.listRootDisabled,
                                    //   selected: classes.activeDisabled,
                                    // }}
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      // flexWrap: "wrap",
                                      justifyContent: "center",
                                      // opacity: previousItem,
                                    }}
                                  >
                                    <TimeBlockDisabled onClick={() => {}}>
                                      10:00 AM
                                    </TimeBlockDisabled>

                                    <TimeBlockDisabled onClick={() => {}}>
                                      10:30 AM
                                    </TimeBlockDisabled>
                                  </ListItem>
                                </span>
                                <span
                                  style={{
                                    margin: 0,
                                    padding: 0,
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <ListItem
                                    className={classes.listItemDisabled}
                                    // key={index}
                                    disabled={true}
                                    // classes={{
                                    //   root: classes.listRootDisabled,
                                    //   selected: classes.activeDisabled,
                                    // }}
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      // flexWrap: "wrap",
                                      justifyContent: "center",
                                      // opacity: previousItem,
                                    }}
                                  >
                                    <TimeBlockDisabled onClick={() => {}}>
                                      12:00 PM
                                    </TimeBlockDisabled>

                                    <TimeBlockDisabled onClick={() => {}}>
                                      12:30 PM
                                    </TimeBlockDisabled>
                                  </ListItem>
                                </span>
                                <span
                                  style={{
                                    margin: 0,
                                    padding: 0,
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <ListItem
                                    className={classes.listItemDisabled}
                                    // key={index}
                                    disabled={true}
                                    // classes={{
                                    //   root: classes.listRootDisabled,
                                    //   selected: classes.activeDisabled,
                                    // }}
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      // flexWrap: "wrap",
                                      justifyContent: "center",
                                      // opacity: previousItem,
                                    }}
                                  >
                                    <TimeBlockDisabled onClick={() => {}}>
                                      2:00 PM
                                    </TimeBlockDisabled>

                                    <TimeBlockDisabled onClick={() => {}}>
                                      2:30 PM
                                    </TimeBlockDisabled>
                                  </ListItem>
                                </span>
                                <span
                                  style={{
                                    margin: 0,
                                    padding: 0,
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <ListItem
                                    className={classes.listItemDisabled}
                                    // key={index}
                                    disabled={true}
                                    // classes={{
                                    //   root: classes.listRootDisabled,
                                    //   selected: classes.activeDisabled,
                                    // }}
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      // flexWrap: "wrap",
                                      justifyContent: "center",
                                      // opacity: previousItem,
                                    }}
                                  >
                                    <TimeBlockDisabled onClick={() => {}}>
                                      4:00 PM
                                    </TimeBlockDisabled>

                                    <TimeBlockDisabled onClick={() => {}}>
                                      4:30 PM
                                    </TimeBlockDisabled>
                                  </ListItem>
                                </span>
                                <span
                                  style={{
                                    margin: 0,
                                    padding: 0,
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <ListItem
                                    className={classes.listItemDisabled}
                                    // key={index}
                                    disabled={true}
                                    // classes={{
                                    //   root: classes.listRootDisabled,
                                    //   selected: classes.activeDisabled,
                                    // }}
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      // flexWrap: "wrap",
                                      justifyContent: "center",
                                      // opacity: previousItem,
                                    }}
                                  >
                                    <TimeBlockDisabled onClick={() => {}}>
                                      6:00 PM
                                    </TimeBlockDisabled>

                                    <TimeBlockDisabled onClick={() => {}}>
                                      6:30 PM
                                    </TimeBlockDisabled>
                                  </ListItem>
                                </span>
                              </>
                            )}
                            {!disableToday &&
                              times2?.map((item, index, arr) => {
                                const previousItem = arr[index - 1]
                                if (item.length == 3) {
                                  return (
                                    <span
                                      style={{
                                        margin: 0,
                                        padding: 0,
                                        display: "flex",
                                        flexDirection: "row",
                                      }}
                                    >
                                      <ListItem
                                        className={classes.listItemDisabled}
                                        key={index}
                                        disabled={true}
                                        // classes={{
                                        //   root: classes.listRootDisabled,
                                        //   selected: classes.activeDisabled,
                                        // }}
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          // flexWrap: "wrap",
                                          justifyContent: "center",
                                          // opacity: previousItem,
                                        }}
                                      >
                                        <TimeBlockDisabled onClick={() => {}}>
                                          {item[0]}
                                        </TimeBlockDisabled>

                                        <TimeBlockDisabled onClick={() => {}}>
                                          {item[1]}
                                        </TimeBlockDisabled>
                                      </ListItem>
                                    </span>
                                    // </div>
                                  )
                                } else {
                                  return (
                                    <span
                                      style={{
                                        margin: 0,
                                        padding: 0,
                                        display: "flex",
                                        flexDirection: "row",
                                      }}
                                    >
                                      <ListItem
                                        className={classes.listItem}
                                        key={index}
                                        onClick={(event) => {
                                          // setSelectedDateForSubmit(
                                          //   new Date(selectedDateForSubmit)
                                          //     ?.toISOString()
                                          //     ?.split("T")[0]
                                          // )

                                          var start = moment(item[0], [
                                            "h:mm A",
                                          ]).format("HH:mm")
                                          const start2 = start + `:00`
                                          setClientChoiceStart(start2)
                                          var end = moment(item[1], [
                                            "h:mm A",
                                          ]).format("HH:mm")
                                          const end2 = end + `:00`
                                          setClientChoiceEnd(end2)
                                          // setBg(true)
                                          // setBgIndex(index)
                                          setBgItemStart(event.target.innerText)
                                          setBgItemEnd(event.target.innerText)
                                        }}
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          // flexWrap: "wrap",
                                          justifyContent: "center",
                                          // opacity: previousItem,
                                        }}
                                        // selected={item === bgItem}
                                        // classes={{
                                        //   root: classes.listRoot,
                                        //   selected: classes.active,
                                        // }}
                                      >
                                        <ListItem
                                          className={classes.listItemStart}
                                          selected={item[0] === bgItemStart}
                                          classes={{
                                            root: classes.listRootStart,
                                            selected: classes.activeStart,
                                          }}
                                        >
                                          {item[0]}
                                        </ListItem>

                                        <ListItem
                                          className={classes.listItemEnd}
                                          selected={item[1] === bgItemEnd}
                                          classes={{
                                            root: classes.listRootEnd,
                                            selected: classes.activeEnd,
                                          }}
                                        >
                                          {item[1]}
                                        </ListItem>
                                      </ListItem>
                                    </span>
                                    // </div>
                                  )
                                }
                              })}
                          </TimesBlock>
                        </RedErrorTimes>
                      )}
                    </>
                  )}
                </CalendarSection>

                <InputsBlock>
                  <Names>
                    <FirstNameBlock>
                      <LabelFirsName for="input-first-name">
                        First Name*
                      </LabelFirsName>
                      <InputFirstName
                        id="input-first-name"
                        required
                        onChange={(event) => {
                          setFirstName(event.target.value)
                        }}
                      />
                    </FirstNameBlock>
                    <LastNameBlock>
                      <LabelLastName for="input-last-name">
                        Last Name*
                      </LabelLastName>
                      <InputLastName
                        id="input-last-name"
                        required
                        onChange={(event) => {
                          setLastName(event.target.value)
                        }}
                      />
                    </LastNameBlock>
                  </Names>
                  <CompanyNameBlock>
                    <LabelCompanyName for="input-company-name">
                      Company Name*
                    </LabelCompanyName>
                    <InputCompanyName
                      id="input-company-name"
                      required
                      onChange={(event) => {
                        setBusinessName(event.target.value)
                      }}
                    />
                  </CompanyNameBlock>
                  <EmailBlock>
                    <LabelEmail for="input-email">Email*</LabelEmail>
                    <InputEmail
                      id="input-email"
                      required
                      type="email"
                      onChange={(event) => {
                        setEmail(event.target.value)
                      }}
                      onBlur={(e) => {
                        emailHandler(e)
                      }}
                    />
                    <div
                      style={{
                        fontSize: "14px",
                        marginTop: "5px",
                        color: "red",
                      }}
                    >
                      {emailError}
                    </div>
                  </EmailBlock>

                  {hasError && (
                    <FormHelperText>Please select your country</FormHelperText>
                  )}
                  <Select
                    value={country}
                    onChange={(event) => handleChangeCountry(event)}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    // input={<OutlinedInput />}
                    // InputProps={{ disableUnderline: true }}
                    classes={{
                      root: classes.selectControl,
                      select: classes.selectSelected,
                      icon: classes.arrowDownIcon,
                    }}
                    className={classes.selectMenu}
                    disableUnderline
                  >
                    <MenuItem disabled value="">
                      <span>Select your country</span>
                    </MenuItem>
                    {gotCountries?.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item.id}>
                          {item.name}
                        </MenuItem>
                      )
                    })}

                    {/* <MenuItem value="">
                    <em>None</em>
                  </MenuItem> */}
                    {/* 
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>

                  {/* <button onClick={() => console.log(gotCountries)}>
                  {" "}
                  click
                </button> */}
                  {/* <ReCaptchaBlock>
                <ReCAPTCHA
                  sitekey="6LfvZygcAAAAAJx2Tbd8TMxxzREXYsQKK-1o6Qu_"
                  onChange={onChangeRecaptcha}
                />
              </ReCaptchaBlock> */}
                  <SubmitBlock>
                    <Submit
                      type="submit"
                      // onClick={}
                    >
                      SUBMIT
                    </Submit>
                  </SubmitBlock>
                </InputsBlock>
              </FormControl>
            </Form>
          </Container>
          <div
            style={{
              position: "absolute",
              top: "48%",
              left: "47%",
            }}
          >
            {checkmark && <Checkmark />}
          </div>
          {flagForPreloaderSubmit && (
            <div
              style={{
                position: "absolute",
                top: "48%",
                left: "47.5%",
              }}
            >
              <CircularProgress />
            </div>
          )}
        </Wrapper>
      </Dialog>
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  /* opacity: 0.5; */
  /* height: 80vh; */
`
const Container = styled.div`
  /* height: 80vh; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 0 24px;
  padding-top: 30px;
  padding-bottom: 40px;

  @media (max-width: 620px) {
    align-items: center;
  }
  opacity: ${(prop) => (prop.transparentBg ? 0.5 : 1)};
`
const Form = styled.form`
  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const ContainerForTitle = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Text = styled.div`
  width: 90%;
  font-size: 19px;
  @media (max-width: 620px) {
    width: 80%;
    font-size: 16.5px;
  }
`

const CloseIcon = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
`
const Img = styled.img`
  width: 20px;
  height: 20px;
`
const CalendarSection = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  margin-bottom: 30px;
  @media (max-width: 664px) {
    flex-direction: column;
    align-items: center;
  }
`

const CalendarBlock = styled.div``

const RedErrorCalendar = styled.div`
  border: ${(prop) => (prop.redErrorCalendar ? "1px solid red" : "none")};
  border-radius: 6px;
`
const RedErrorTimes = styled.div`
  border: ${(prop) => (prop.redErrorTimes ? "1px solid red" : "none")};
  padding-right: 6px;
  padding-bottom: 6px;
  border-radius: 6px;
`
const TimesBlock = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  @media (max-width: 664px) {
    align-items: center;
  }
`
const InputsBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* align-items: center; */
`
const Names = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
  }
`

const FirstNameBlock = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 20px;
  }
`
const LabelFirsName = styled.label`
  margin-bottom: 8px;
`

const InputFirstName = styled.input`
  /* width: 100%; */
  height: 45px;
  border-radius: 8px;
  border: 1px solid grey;
  font-size: 14px;
  padding-left: 15px;
  outline: none;
`
const LastNameBlock = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
  }
`
const LabelLastName = styled.label`
  margin-bottom: 8px;
`
const InputLastName = styled.input`
  /* width: 100%; */
  height: 45px;
  border-radius: 8px;
  border: 1px solid grey;
  font-size: 14px;
  padding-left: 15px;
  outline: none;
`
const CompanyNameBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
const LabelCompanyName = styled.label`
  margin-bottom: 8px;
`
const InputCompanyName = styled.input`
  /* width: 100%; */
  height: 45px;
  border-radius: 8px;
  border: 1px solid grey;
  font-size: 14px;
  padding-left: 15px;
  outline: none;
`
const EmailBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

const LabelEmail = styled.label`
  margin-bottom: 8px;
`
const InputEmail = styled.input`
  /* width: 100%; */
  height: 45px;
  border-radius: 8px;
  border: 1px solid grey;
  font-size: 14px;
  padding-left: 15px;
  outline: none;
`
// const TimeBlock = styled.div`
//   width: 120px;
//   height: 50px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 6px;
//   margin-left: 6px;
//   background-color: #261952;
//   border-radius: 8px;
//   font-size: 16px;
//   border: #261952 solid 1px;
//   color: white;
//   transition: 0.3s;
//   cursor: context-menu;
//   @media (max-width: 664px) {
//     width: 110px;
//     height: 45px;
//   }
// `
const TimeBlockDisabled = styled.div`
  width: 120px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  margin-left: 6px;
  background-color: #261952;
  border-radius: 8px;
  font-size: 16px;
  /* border: #261952 solid 1px; */
  color: white;
  cursor: no-drop;
  @media (max-width: 664px) {
    width: 110px;
    height: 45px;
  }
`
// const ReCaptchaBlock = styled.div`
//   margin-bottom: 15px;
// `
const SubmitBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Submit = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  background: #261952;
  color: white;
  border: none;
  &:hover {
    cursor: pointer;
    background: #533ba6;
  }
`

export default RequestDemo
