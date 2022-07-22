import styled from "styled-components"

import React, { useState } from "react"
import Image from "next/image"
import { CheckmarkPricingBlock, CloseIconSvg } from "../public/icons"
import style from "../styles/PaymentForm.module.scss"
import Cleave from "cleave.js/react"
import Modal from "@mui/material/Modal"
import { useDispatch } from "react-redux"

const Specials = () => {
  function imageLoader({ src, width, height }) {
    // const relativeSrc = (src) => src.split("/").pop()

    return `https://landing-page-nextjs.s3.us-east-2.amazonaws.com/${src}`
  }

  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [firstName, setFirsName] = useState("")
  const [lastName, setLastName] = useState("")
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
  const handleCardNumber = (e) => {
    // setCreditCardNum(e.target.rawValue)
    // setCardForPaymentSubmit(e.target.value)
    // console.log(e.target.value)
    // console.log(e.target.value);
    setCardNumber(e.target.value)
  }

  function handleMonth(e) {
    if (e < 12) {
      setMonth(e)
    } else {
      return
    }
    // else set the input value
  }

  const handleType = (type) => {
    // setCardType(type)
    // console.log(type)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // handleOpen()
    dispatch({
      // type: "SET_PAYMENT_DETAILS_INFO",
      payload: {
        // paymentId,
        inputsValue: {
          //   ...paymentData,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phoneNumber,
          address: address,
          city: city,
          state: state,
          zip: zip,
          cardNumber: cardNumber.replace(/\s/g, ""),
          month: month,
          year: year,
          cvc: cvc,
          // tipAmount: grativityAmount,
          // paymentId: parseInt(paymentId),
        },
      },
    })
  }

  return (
    <WrapperWtihBackground>
      <Wrapper>
        <ImagesBlock>
          <div
            style={{ width: "500px", height: "400px", position: "relative" }}
          >
            <Image
              loader={imageLoader}
              src="specialsImages.svg"
              alt="mobile phones"
              // style={{ width: "100%", height: "100%" }}
              // width={"100%"}
              // height={"100%"}
              layout="fill"
            />
          </div>
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
                <ItemTitle>Website Landing Page</ItemTitle>
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
                <ItemTitle>2-Month Mobile App Subscription</ItemTitle>
              </ItemContainer>
            </WhatYoullGet>
            <ButtonClaimNow onClick={handleOpen}>Claim Now</ButtonClaimNow>
          </TextBlockContainer>
        </TextBlock>
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
            <form
              // className={style.wrapper}
              onSubmit={handleSubmit}
              style={{
                width: "400px",
                background: "white",
                padding: "23px",
                borderRadius: "13px",
                // pointerEvents: "none",
              }}
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
                  <input
                    type="number"
                    className={style.monthInput}
                    placeholder="Month"
                    required
                    onChange={(event) => {
                      handleMonth(event.target.value)
                    }}
                  />
                  <input
                    type="number"
                    className={style.yearInput}
                    placeholder="Year"
                    required
                    onChange={(event) => {
                      setYear(event.target.value)
                    }}
                  />
                  <input
                    type="number"
                    className={style.cvcInput}
                    placeholder="Cvc"
                    required
                    onChange={(event) => {
                      setCvc(event.target.value)
                    }}
                  />
                </div>
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
                  // value={`Pay $${paymentData?.invoiceReservationInfo?.total}`}
                  className={style.payButton}
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
            </form>
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
`
const ImagesBlock = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`
const TextBlock = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`
const TextBlockContainer = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.p`
  font-weight: 700;
  line-height: 33px;
  font-size: calc(21px + (7 + 7 * 0.7) * ((46vw - 620px) / 1520));
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
`
const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
`

const CheckmarkSize = styled.div`
  width: 35px;
  height: 35px;
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
`
export default Specials
