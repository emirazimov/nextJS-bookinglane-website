import styled from 'styled-components'
import { css } from 'styled-components'
import StripeImg from '../public/Stripe.jpg'
import GnetImg from '../public/Gnet.jpg'
import GlobalNetworkImg from '../public/GlobalNetwork.jpg'
import Image from 'next/image'

function imageLoader({ src, width, height }) {
  // const relativeSrc = (src) => src.split("/").pop()

  return `https://landing-page-nextjs.s3.us-east-2.amazonaws.com/${src}`
}

const PartneredWith = () => {
  return (
    <Wrapper>
      <Container>
        <Title>PARTNERED WITH</Title>
        <PartnersIconsBlockContainer>
          <Stripe>
            <Image
              // src='https://landing-page-nextjs.s3.us-east-2.amazonaws.com/Stripe.jpg'
              // alt='Stripe'
              // style={{ width: '100%', height: '100%' }}
              loader={imageLoader}
              src='Stripe.jpg'
              alt='Stripe'
              // style={{ width: "100%", height: "100%" }}
              width={'655%'}
              height={'368%'}
              // layout='fill'
            />
          </Stripe>
          <Gnet>
            <Image
              // src='https://landing-page-nextjs.s3.us-east-2.amazonaws.com/Gnet.jpg'
              // alt='Gnet'
              // style={{ width: '100%', height: '100%' }}
              loader={imageLoader}
              src='Gnet.jpg'
              alt='Gnet'
              // style={{ width: "100%", height: "100%" }}
              width={'655%'}
              height={'368%'}
              // layout='fill'
            />
          </Gnet>
          <GlobalNetwork>
            <Image
              // src='https://landing-page-nextjs.s3.us-east-2.amazonaws.com/GlobalNetwork.jpg'
              // alt='GlobalNetwork'
              // style={{ width: '100%', height: '100%' }}
              loader={imageLoader}
              src='GlobalNetwork.jpg'
              alt='GlobalNetwork'
              // style={{ width: "100%", height: "100%" }}
              width={'655%'}
              height={'368%'}
              // layout='fill'
            />
          </GlobalNetwork>
          <Twilio>
            <Image
              // src='https://landing-page-nextjs.s3.us-east-2.amazonaws.com/twilio-min.jpg'
              // alt='Twilio'
              // style={{ width: '100%', height: '100%' }}
              loader={imageLoader}
              src='twilio-min.jpg'
              alt='Twilio'
              // style={{ width: "100%", height: "100%" }}
              width={'655%'}
              height={'368%'}
              // layout='fill'
            />
          </Twilio>
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
  @media (max-width: 801px) {
    flex-direction: column;
    align-items: center;
  }
`

const Stripe = styled.div`
  width: 320px;
  height: 177px;
  margin-right: 20px;
  @media (max-width: 1629px) {
    width: 280px;
    height: 157px;
  }
  @media (max-width: 1183px) {
    width: 260px;
    height: 137px;
  }
  @media (max-width: 925px) {
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
    width: 280px;
    height: 157px;
  }
  @media (max-width: 1183px) {
    width: 260px;
    height: 137px;
  }
  @media (max-width: 925px) {
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
  margin-right: 20px;
  @media (max-width: 1629px) {
    width: 280px;
    height: 157px;
  }
  @media (max-width: 1183px) {
    width: 260px;
    height: 137px;
  }
  @media (max-width: 925px) {
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

const Twilio = styled.div`
  width: 320px;
  height: 177px;
  @media (max-width: 1629px) {
    width: 280px;
    height: 157px;
  }
  @media (max-width: 1183px) {
    width: 260px;
    height: 137px;
  }
  @media (max-width: 925px) {
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

export default PartneredWith
