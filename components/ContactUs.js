import styled from "styled-components"
// import { css } from "styled-components"
import React, { useState } from "react"
// import closeIcon from "../public/CloseIcon.svg"
import {
  CircularProgress,
  Dialog,
  DialogTitle,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { Checkmark } from "./Helpers/Checkmark"
import Image from "next/image"
import { CloseIconSvg } from "../public/icons"

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
      backgroundColor: "#533BA6",
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
      backgroundColor: "#533BA6",
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
  // selectSelected: {
  //   background: "red",
  //   // "&.Mui-selected": {
  //   //   backgroundColor: "red",
  //   //   color: "white",
  //   //   fontWeight: 600,
  //   // },
  // },
}))

const ContactUs = ({ opened }) => {
  const classes = useStyles()
  const [mainState, setMainState] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    phone: "",
    email: "",
    countryId: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setMainState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log({
      name: `${value}`,
      // name: `${value}`,
      // name: `${value}`,
      // name: `${value}`,
      // name: `${value}`,
      // name: `${value}`,
    })
  }
  const contuctUs = useSelector((store) => store.contuctUs.trigger)
  // const [open, setOpen] = useState(opened)

  // const handleClose = (value) => {
  //   setOpen(false)
  //   // setSelectedValue(value)
  // }
  const dispatch = useDispatch()

  const [checkmark, setCheckmark] = useState(false)
  const [flagForPreloader, setFlagForPreloader] = useState(false)
  const [transparentBg, setTransparentBg] = useState(false)
  const [hasError, setHasError] = useState(null)
  const { register, handleSubmit, errors } = useForm()
  const gotCountries = useSelector((store) => store.countriesApi.countries)

  const onSubmit = handleSubmit((event) => {
    // event.preventDefault()
    // const templateId = "template_f8hqo9u"

    sendFeedback()
  })

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      company: {
        ...mainState,
      },
      isContactUs: true,
    }),
  }

  const sendFeedback = () => {
    if (hasError) {
      setTransparentBg(true)
      setFlagForPreloader(true)
      fetch("https://api.bookinglane.com/api/contacts", requestOptions)
        .then((res) => {
          setFlagForPreloader(false)
          setCheckmark(true)
          // setTransparentBg(false)
          console.log("Email successfully sent!")
        })
        // Handle errors here however you like, or use a React error boundary
        .catch((err) =>
          console.error(
            "Oh well, you failed. Here some thoughts on the error that occured:",
            err
          )
        )
    } else {
      if (!hasError) {
        setHasError(true)
      } else {
        setHasError(false)
      }
    }
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

  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        // onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={contuctUs}
      >
        <DialogTitle
          style={{
            marginTop: "20px",
          }}
        >
          <ContainerForTitle>
            <Text>Contact Us</Text>
            <CloseIcon
              onClick={() => {
                dispatch({ type: "SET_CONTUCT_US", payload: false })
              }}
            >
              <CloseIconSvg />
            </CloseIcon>
          </ContainerForTitle>
        </DialogTitle>
        <Wrapper>
          <Container transparentBg={transparentBg}>
            <form className="test-mailing" onSubmit={onSubmit}>
              <InputsBlock>
                <Names>
                  <FirstNameBlock>
                    <LabelFirsName for="input-first-name">
                      First Name*
                    </LabelFirsName>
                    <InputFirstName
                      id="test-mailing"
                      name="firstName"
                      onChange={handleChange}
                      required
                      ref={register({ required: true })}
                      value={mainState.firstName}
                    />
                  </FirstNameBlock>
                  <LastNameBlock>
                    <LabelLastName for="input-last-name">
                      Last Name*
                    </LabelLastName>
                    <InputLastName
                      id="input-last-name"
                      name="lastName"
                      required
                      ref={register({ required: true })}
                      value={mainState.lastName}
                      onChange={handleChange}
                    />
                  </LastNameBlock>
                </Names>
                <CompanyNameBlock>
                  <LabelCompanyName for="input-company-name">
                    Company Name*
                  </LabelCompanyName>
                  <InputCompanyName
                    id="input-company-name"
                    name="businessName"
                    required
                    ref={register({ required: true })}
                    value={mainState.businessName}
                    onChange={handleChange}
                  />
                </CompanyNameBlock>

                <PhoneNumberBlock>
                  <LabelPhoneNumber for="input-phone-number">
                    Phone number
                  </LabelPhoneNumber>
                  <InputPhoneNumber
                    id="input-phone-number"
                    name="phone"
                    // required
                    value={mainState.phone}
                    onChange={handleChange}
                  />
                </PhoneNumberBlock>
                <EmailBlock>
                  <LabelEmail for="input-email">Email*</LabelEmail>
                  <InputEmail
                    id="input-email"
                    name="email"
                    type="email"
                    required
                    ref={register({ required: true })}
                    value={mainState.email}
                    onChange={handleChange}
                    onBlur={(e) => {
                      emailHandler(e)
                    }}
                  />
                  <div
                    style={{ fontSize: "15px", marginTop: "5px", color: "red" }}
                  >
                    {emailError}
                  </div>
                </EmailBlock>

                <Select
                  value={mainState.countryId}
                  onChange={handleChange}
                  required
                  name="countryId"
                  // ref={register({ required: true })}
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
                </Select>

                <MessageBlock>
                  <LabelMessage for="input-message">Message*</LabelMessage>
                  <TextareaMessageBlock
                    id="input-message"
                    name="message"
                    onChange={handleChange}
                    required
                    // ref={register({ required: true })}
                    value={mainState.message}
                  />
                </MessageBlock>
                <InputButtonBlock>
                  <InputButton
                    type="submit"
                    value="SUBMIT"
                    className="btn btn--submit"
                    // onClick={handleSubmit}
                  />
                </InputButtonBlock>
              </InputsBlock>
            </form>
          </Container>
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "47%",
            }}
          >
            {checkmark && <Checkmark />}
          </div>
          {flagForPreloader && (
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "47%",
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

export default ContactUs

const Wrapper = styled.div`
  width: 100%;
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
  opacity: ${(prop) => (prop.transparentBg ? 0.5 : 1)};
`
const ContainerForTitle = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  @media (max-width: 620px) {
    flex-direction: column;
    width: 100%;
  }
`
const FirstNameBlock = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  @media (max-width: 620px) {
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
  @media (max-width: 620px) {
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

const PhoneNumberBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
const LabelPhoneNumber = styled.label`
  margin-bottom: 8px;
`
const InputPhoneNumber = styled.input`
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
const MessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`
const LabelMessage = styled.label`
  margin-bottom: 8px;
`
const TextareaMessageBlock = styled.textarea`
  height: 150px;
  border-radius: 8px;
  border: 1px solid grey;
  font-size: 14px;
  padding-left: 15px;
  padding-top: 15px;
  outline: none;
`
const InputButtonBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const InputButton = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  background: #261952;
  color: white;
  border: none;
  &:hover {
    cursor: pointer;
    background: #301470;
  }
`
const Text = styled.div``
const Img = styled.img`
  width: 20px;
  height: 20px;
`
const CloseIcon = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
`
