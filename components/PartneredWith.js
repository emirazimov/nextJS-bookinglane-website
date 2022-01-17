import styled from "styled-components"
import { css } from "styled-components"
import StripeImg from "../public/Stripe.jpg"
import GnetImg from "../public/Gnet.jpg"
import GlobalNetworkImg from "../public/GlobalNetwork.jpg"

const PartneredWith = () => {
  return (
    <Wrapper>
      <Container>
        <Title>PARTNERED WITH</Title>
        <PartnersIconsBlockContainer>
          <Stripe>
            <img
              src="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/Stripe.jpg"
              alt="Stripe"
              style={{ width: "100%", height: "100%" }}
            />
          </Stripe>
          <Gnet>
            <img
              src="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/Gnet.jpg"
              alt="Gnet"
              style={{ width: "100%", height: "100%" }}
            />
          </Gnet>
          <GlobalNetwork>
            <img
              src="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/GlobalNetwork.jpg"
              alt="GlobalNetwork"
              style={{ width: "100%", height: "100%" }}
            />
          </GlobalNetwork>
        </PartnersIconsBlockContainer>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #f6f4ff;
`
const Container = styled.div`
  max-width: 1520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  padding-top: 70px;
  padding-bottom: 70px;
  @media (max-width: 1545px) {
    margin: 0px 45px;
  }
  @media (max-width: 620px) {
    margin: 0px 16px;
  }
`
const Title = styled.h3`
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  color: black;
  margin: 0;
  margin-bottom: 40px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`
const PartnersIconsBlockContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 701px) {
    flex-direction: column;
    align-items: center;
  }
`

const Stripe = styled.div`
  width: 320px;
  height: 177px;
  margin-right: 20px;
  @media (max-width: 1629px) {
    width: 300px;
    height: 157px;
  }
  @media (max-width: 983px) {
    width: 260px;
    height: 117px;
  }
  @media (max-width: 825px) {
    width: 220px;
    height: 107px;
  }
  @media (max-width: 701px) {
    width: 190px;
    height: 97px;
    margin-right: 0;
    margin-bottom: 20px;
  }
`
const Gnet = styled.div`
  width: 320px;
  height: 177px;
  margin-right: 20px;
  @media (max-width: 1629px) {
    width: 300px;
    height: 157px;
  }
  @media (max-width: 983px) {
    width: 260px;
    height: 117px;
  }
  @media (max-width: 825px) {
    width: 220px;
    height: 107px;
  }
  @media (max-width: 701px) {
    width: 190px;
    height: 97px;
    margin-right: 0;
    margin-bottom: 20px;
  }
`
const GlobalNetwork = styled.div`
  width: 320px;
  height: 177px;
  @media (max-width: 1629px) {
    width: 300px;
    height: 157px;
  }
  @media (max-width: 983px) {
    width: 260px;
    height: 117px;
  }
  @media (max-width: 825px) {
    width: 220px;
    height: 107px;
  }
  @media (max-width: 701px) {
    width: 190px;
    height: 97px;
    margin-right: 0;
    margin-bottom: 20px;
  }
  /* margin-right: 20px; */
`

export default PartneredWith
