import styled from "styled-components"

import React, { useState } from "react"
import Image from "next/image"
import { CheckmarkPricingBlock, CloseIconSvg } from "../public/icons"
import style from "../styles/PaymentForm.module.scss"
import Cleave from "cleave.js/react"
import Modal from "@mui/material/Modal"
import { useDispatch, useSelector } from "react-redux"
import ReactInputMask from "react-input-mask"

const Specials = () => {
  function imageLoader({ src, width, height }) {
    // const relativeSrc = (src) => src.split("/").pop()

    return `https://landing-page-nextjs.s3.us-east-2.amazonaws.com/${src}`
  }

  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [openInteractive, setOpenInteractive] = useState(false)
  const handleOpenInteractive = () => setOpenInteractive(true)
  const handleCloseInteractive = () => setOpenInteractive(false)

  const [firstName, setFirsName] = useState("")
  const [lastName, setLastName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [companyWebsite, setCompanyWebsite] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [cvc, setCvc] = useState("")
  const [cardType, setCardType] = useState("")
  const handleCardNumber = (e) => {
    // setCreditCardNum(e.target.rawValue)
    // setCardForPaymentSubmit(e.target.value)
    // console.log(e.target.value)
    // console.log(e.target.value);
    setCardNumber(e.target.value)
  }

  const handleMonth = (e) => {
    if (e <= 12) {
      setMonth(e)
    } else {
      return
    }
    // else set the input value
  }

  const handleType = (type) => {
    setCardType(type)
    // console.log(type)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // handleOpen()
    handleOpenInteractive()
    dispatch({
      type: "SET_SPECIALS",
      payload: {
        // paymentId,
        inputsValue: {
          //   ...paymentData,
          firstName: firstName,
          lastName: lastName,
          companyName: companyName,
          companyWebsite: companyWebsite,
          email: email,
          phone: phoneNumber,
          address: address,
          city: city,
          state: state,
          zip: zip,
          cardInfo: {
            number: cardNumber.replace(/\s/g, ""),
            expYear: year,
            expMonth: month,
            cvc: cvc,
          },
          // tipAmount: grativityAmount,
          // paymentId: parseInt(paymentId),
        },
      },
    })
  }

  const specials = useSelector((state) => state.specials)

  const [iAgree, setIAgree] = useState(false)

  return (
    <WrapperWtihBackground>
      <Wrapper>
        <ImagesBlock>
          <ImageContainer
          // style={{ width: "700px", height: "405px", position: "relative" }}
          >
            <Image
              loader={imageLoader}
              src="specialsImages.png"
              alt="mobile phones"
              // style={{ width: "100%", height: "100%" }}
              // width={"100%"}
              // height={"100%"}
              layout="fill"
            />
          </ImageContainer>
        </ImagesBlock>
        <TextBlock>
          <TextBlockContainer>
            <Title>Limited Time Only - $599 Special</Title>
            <WhatYoullGet>
              <WhatYoullGetTitle>What you’ll get:</WhatYoullGetTitle>
              <ItemContainer>
                <CheckmarkSize>
                  <CheckmarkPricingBlock />
                </CheckmarkSize>
                <ItemTitle>Website Landing Page & SEO</ItemTitle>
              </ItemContainer>
              <ItemContainer>
                <CheckmarkSize>
                  <CheckmarkPricingBlock />
                </CheckmarkSize>
                <ItemTitle>Customized Website Booking Tool (Widget)</ItemTitle>
              </ItemContainer>
              <ItemContainer>
                <CheckmarkSize>
                  <CheckmarkPricingBlock />
                </CheckmarkSize>
                <ItemTitle>12-Month Mobile App Subscription</ItemTitle>
              </ItemContainer>
            </WhatYoullGet>
            <ButtonClaimNow onClick={handleOpen}>Claim Now</ButtonClaimNow>
          </TextBlockContainer>
        </TextBlock>

        <Modal open={openInteractive} onClose={handleCloseInteractive}>
          {specials.isSendingBillingInformation == true ? (
            // <div
            // style={{

            //   width: "100%",
            //   height: "100vh",
            //   position: "absolute",
            //   // top: "50%",
            //   // left: "50%",
            //   background: "white",
            //   // opacity: "0.5",
            // }}
            // >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "300px",
                  height: "60%",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                  // top: "33%",
                  // left: "42%",
                  background: "white",
                  // opacity: "0.5",
                }}
              >
                <h3>...Loading</h3>
              </div>
            </div>
          ) : (
            <>
              {specials.successfullySended && (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "300px",
                      height: "60%",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "12px",
                      // top: "33%",
                      // left: "42%",
                      background: "white",
                      // opacity: "0.5",
                    }}
                  >
                    <svg
                      width="53"
                      height="53"
                      viewBox="0 0 123 123"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="61.5"
                        cy="61.5"
                        r="58"
                        stroke="#219653"
                        stroke-width="7"
                      />
                      <path
                        d="M41 61.4996L47.3088 54.9384L56.7692 64.7796L75.6923 45.0996L82 51.6596L56.7692 77.8996L41 61.4996Z"
                        fill="#219653"
                      />
                    </svg>

                    <h1
                      style={{
                        fontSize: "19px",
                        color: "black",
                        textAlign: "center",
                        // marginTop: "20px",
                      }}
                    >
                      You are all set! we will get in touch with you in the next
                      24-48 hours.
                    </h1>

                    <button
                      style={{
                        width: "90%",
                        height: "40px",
                        position: "absolute",
                        bottom: "20px",
                        background: "#201144",
                        color: "white",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                      onClick={handleCloseInteractive}
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}

              {specials.failedSent && (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "300px",
                      height: "60%",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "12px",
                      // top: "33%",
                      // left: "42%",
                      background: "white",
                      // opacity: "0.5",
                    }}
                  >
                    <svg
                      width="53"
                      height="53"
                      viewBox="0 0 123 123"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="61.5"
                        cy="61.5"
                        r="58"
                        stroke="#FB4A3C"
                        stroke-width="7"
                      />
                      <path
                        d="M45.0996 51.6596L51.6596 45.0996L77.8996 71.3396L71.3396 77.8996L45.0996 51.6596Z"
                        fill="#FB4A3C"
                      />
                      <path
                        d="M51.6596 77.8996L45.0996 71.3396L71.3396 45.0996L77.8996 51.6596L51.6596 77.8996Z"
                        fill="#FB4A3C"
                      />
                    </svg>

                    <h1
                      style={{
                        color: "black",
                        textAlign: "center",
                        fontSize: "19px",
                      }}
                    >
                      {specials.failMessage ? specials.failMessage : `Failed`}
                    </h1>
                    <button
                      style={{
                        width: "90%",
                        height: "40px",
                        position: "absolute",
                        bottom: "20px",
                        background: "#201144",
                        color: "white",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                      onClick={handleCloseInteractive}
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </Modal>

        <Modal open={open} onClose={handleClose}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            // onClick={handleClose}
          >
            <Form
              // className={style.wrapper}
              onSubmit={handleSubmit}
              // style={{
              //   width: "400px",
              //   background: "white",
              //   padding: "23px",
              //   borderRadius: "13px",
              //   // pointerEvents: "none",
              // }}
            >
              <div className={style.billingInformationContainer}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className={style.billingInformationTitle}>
                    Billing information
                  </span>
                  <div onClick={handleClose} style={{ cursor: "pointer" }}>
                    <CloseIconSvg></CloseIconSvg>
                  </div>
                </div>
                <div className={style.firstNameAndLastNameContainer}>
                  <input
                    className={style.firstNameInput}
                    placeholder="First Name"
                    required
                    onChange={(event) => {
                      setFirsName(event.target.value)
                    }}
                  />
                  <input
                    className={style.lastNameInput}
                    placeholder="Last Name"
                    required
                    onChange={(event) => {
                      setLastName(event.target.value)
                    }}
                  />
                </div>
                <div className={style.companyNameContainer}>
                  <input
                    className={style.companyNameInput}
                    placeholder="Company Name"
                    required
                    onChange={(event) => {
                      setCompanyName(event.target.value)
                    }}
                  />
                </div>
                <div className={style.companyWebsiteContainer}>
                  <input
                    className={style.companyWebsiteInput}
                    placeholder="Company Website"
                    onChange={(event) => {
                      setCompanyWebsite(event.target.value)
                    }}
                  />
                </div>
                <div className={style.emailContainer}>
                  <input
                    className={style.emailInput}
                    placeholder="Email"
                    type="email"
                    required
                    onChange={(event) => {
                      setEmail(event.target.value)
                    }}
                  />
                </div>
                <div className={style.phoneNumberContainer}>
                  <input
                    type="number"
                    className={style.phoneNumberInput}
                    placeholder="Phone Number"
                    required
                    onChange={(event) => {
                      setPhoneNumber(event.target.value)
                    }}
                  />
                </div>
                <div className={style.addressContainer}>
                  <input
                    className={style.addressInput}
                    placeholder="Address"
                    onChange={(event) => {
                      setAddress(event.target.value)
                    }}
                  />
                </div>
                <div className={style.cityAndStateContainer}>
                  <input
                    className={style.cityInput}
                    placeholder="City"
                    onChange={(event) => {
                      setCity(event.target.value)
                    }}
                  />
                  <input
                    className={style.stateInput}
                    placeholder="State"
                    onChange={(event) => {
                      setState(event.target.value)
                    }}
                  />
                </div>
                <div className={style.zipContainer}>
                  <input
                    className={style.zipInput}
                    placeholder="Zip"
                    onChange={(event) => {
                      setZip(event.target.value)
                    }}
                  />
                </div>
                <div className={style.cardNumberContainer}>
                  {/* <input
                  className={style.cardNumberInput}
                  placeholder="Card Number"
                  required
                  onChange={(event) => {
                    setCardNumber(event.target.value)
                  }}
                /> */}
                  <Cleave
                    delimiter="-"
                    options={{
                      creditCard: true,
                      onCreditCardTypeChanged: handleType,
                    }}
                    required
                    name="paymentInfo.cardNumber"
                    //   error={errors.paymentInfo?.cardNumber ? true : false}
                    onChange={handleCardNumber}
                    placeholder="Card number"
                    //   className="credit-card-input-by-bookinglane"
                    className={style.cardNumberInput}
                  />
                </div>
                <div className={style.monthAndYearAndCvcContainer}>
                  <ReactInputMask
                    name="paymentInfoMonth"
                    // ref={register}
                    mask="99"
                    autoComplete="off"
                    onChange={(event) => {
                      handleMonth(event.target.value)
                    }}
                    // defaultValue={null}
                    // value={month}
                  >
                    {() => (
                      <input
                        // type="number"
                        className={style.monthInput}
                        placeholder="Month"
                        required
                        // onChange={(event) => {
                        //   handleMonth(event.target.value)
                        // }}
                      />
                    )}
                  </ReactInputMask>
                  <ReactInputMask
                    name="paymentInfoYear"
                    // ref={register}
                    mask="99"
                    autoComplete="off"
                    onChange={(event) => {
                      setYear(event.target.value)
                    }}
                  >
                    {() => (
                      <input
                        // type="number"
                        className={style.yearInput}
                        placeholder="Year"
                        required
                        // onChange={(event) => {
                        //   setYear(event.target.value)
                        // }}
                      />
                    )}
                  </ReactInputMask>
                  <ReactInputMask
                    name="paymentInfoCvc"
                    // ref={register}
                    mask={cardType == "amex" ? "9999" : "999"}
                    autoComplete="off"
                    onChange={(event) => {
                      // console.log(cardType)
                      setCvc(event.target.value)
                    }}
                    // defaultValue={formSummary.paymentInfo.cvc}
                  >
                    {() => {
                      return (
                        <input
                          // type="number"
                          className={style.cvcInput}
                          placeholder="Cvc"
                          required
                          // onChange={(event) => {
                          //   setCvc(event.target.value)
                          // }}
                        />
                      )
                    }}
                  </ReactInputMask>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <input
                    type="checkbox"
                    onClick={() => setIAgree(!iAgree)}
                    checked={iAgree}
                    id="input"
                    style={{
                      width: "20px",
                      height: "20px",
                      display: "block",
                      margin: "0",
                      marginTop: "10px",
                      marginRight: "30px",
                      cursor: "pointer",
                    }}
                  />
                  <label
                    htmlFor="input"
                    style={{
                      width: "100%",
                      // marginTop: "10px",
                      // marginBottom: "20px",
                      // fontWeight: "400",
                    }}
                  >
                    I agree that the $599 special is non-refundable
                  </label>

                  {/* <span style={{ marginTop: "-5px" }}></span> */}
                </div>
                {/* <div>iAgree</div> */}
                {/* {paymentData?.allowTip && (
              <div className={style.addTip}>
                <label className={style.switch}>
                  <input
                    type="checkbox"
                    onClick={() => {
                      setIsGrativityEnabled(!isGrativityEnabled)
                    }}
                  />
                  <span className={style.slider}></span>
                </label>

                <p className={style.addGrativityTitle}>Grativity</p>
              </div>
            )} */}

                {/* {isGrativityEnabled && (
              <div className={style.tipContainer}>
                <input
                  type="number"
                  className={style.tipInput}
                  placeholder="Grativity"
                  required
                  value={grativityAmount}
                  onChange={(event) => {
                    setGrativityAmount(event.target.value)
                  }}
                />
              </div>
            )} */}

                <input
                  type="submit"
                  value="Pay $599.00"
                  className={style.payButton}
                  style={{
                    borderRadius: "10px",
                    opacity: iAgree ? "1" : "0.5",
                  }}
                  disabled={iAgree ? false : true}
                  // onClick={(e) => {
                  //   e.preventDefault()

                  //   dispatch({
                  //     type: "SET_PAYMENT_DETAILS_INFO",
                  //     payload: {
                  //       paymentId,
                  //       inputsValue: {
                  //         ...paymentData,
                  //         firstName: firstName,
                  //         lastName: lastName,
                  //         email: email,
                  //         phone: phoneNumber,
                  //         address: address,
                  //         city: city,
                  //         state: state,
                  //         zip: zip,
                  //         cardNumber: cardNumber,
                  //         month: month,
                  //         year: year,
                  //         cvc: cvc,
                  //         paymentId: parseInt(paymentId),
                  //       },
                  //     },
                  //   })

                  //   // setGorError(
                  //   //   setUsersPaymentDetails(paymentId, {
                  //   //     ...paymentData,
                  //   //     firstName: firstName,
                  //   //     lastName: lastName,
                  //   //     email: email,
                  //   //     phone: phoneNumber,
                  //   //     address: address,
                  //   //     city: city,
                  //   //     state: state,
                  //   //     zip: zip,
                  //   //     cardNumber: cardNumber,
                  //   //     month: month,
                  //   //     year: year,
                  //   //     cvc: cvc,
                  //   //     paymentId: paymentId,
                  //   //   })
                  //   // )
                  // }}
                />
              </div>
            </Form>
          </div>
        </Modal>
      </Wrapper>
    </WrapperWtihBackground>
  )
}

const WrapperWtihBackground = styled.div`
  width: 100%;
  background: #f7f4ff;
`

const Wrapper = styled.div`
  /* height: 950px; */
  max-width: 1520px;
  margin: 0px auto;
  padding-top: 70px;
  padding-bottom: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1385px) {
    margin: 0px 45px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 620px) {
    margin: 0px 16px;
  }
`
const ImagesBlock = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    order: 2;
    width: 100%;
    margin-top: 40px;
  }
`
const TextBlock = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    order: 1;
    width: 100%;
  }
`
const ImageContainer = styled.div`
  width: 700px;
  height: 405px;
  position: relative;
  @media (max-width: 1385px) {
    height: 305px;
  }
  @media (max-width: 1024px) {
    height: 405px;
  }
  @media (max-width: 748px) {
    height: 305px;
  }
  @media (max-width: 531px) {
    height: 230px;
  }
  @media (max-width: 411px) {
    height: 200px;
  }
`

const TextBlockContainer = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 1353px) {
    width: auto;
  }
  /* @media (max-width: 979px) {
    width: 88%;
  }
  @media (max-width: 893px) {
    width: 94%;
  } */
`

const Title = styled.p`
  font-weight: 700;
  line-height: 33px;
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 40px;
`
const WhatYoullGet = styled.div``
const WhatYoullGetTitle = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 23px;
  line-height: 150%;
  color: #000000;
  margin-bottom: 23px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`
const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
`

const CheckmarkSize = styled.div`
  min-width: 35px;
  min-height: 35px;
  max-width: 35px;
  max-height: 35px;
  margin-right: 20px;
`
const ItemTitle = styled.span`
  font-weight: 500;
  font-size: 17px;
  line-height: 118%;

  color: #000000;
`
const ButtonClaimNow = styled.button`
  width: 204px;
  height: 50px;
  margin-top: 60px;
  margin-left: 65px;
  background: #201144;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: #ffffff;
  cursor: pointer;
  @media (max-width: 1024px) {
    margin-left: 0;
    margin: 0 auto;
    margin-top: 60px;
  }
  /* @media (max-width: 404px) {
    margin-left: 0;
    margin: 0 auto;
  } */
`

const Form = styled.form`
  width: 400px;
  background: white;
  padding: 23px;
  border-radius: 13px;
  @media (max-width: 420px) {
    width: 300px;
  }
`

export default Specials
