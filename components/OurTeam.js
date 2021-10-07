import styled from "styled-components"
import { css } from "styled-components"
import Carousel, { consts } from "react-elastic-carousel"
import Ivan from "../public/Ivan-min.jpg"
import Becca from "../public/Becca-min.jpg"
import Evgeniy from "../public/Evgeniy-min.jpg"
import Saltanat from "../public/Saltanat-min.jpg"
import Emir from "../public/Emir-min.jpg"
import Suleyman from "../public/Suleyman-min.jpg"
import Almaz from "../public/Almaz-min.jpg"
import Aytemir from "../public/Aytemir-min.jpg"
import Azim from "../public/Azim-min.jpg"
import { LeftArrowForCarousel, RightArrowForCarousel } from "../public/icons"
import { useState } from "react"
import { useMediaQuery } from "@material-ui/core"
import Image from "next/image"

export const OurTeam = () => {
  const [images, setImages] = useState([
    Evgeniy,
    Becca,
    Ivan,
    Almaz,
    Emir,
    Azim,
    Saltanat,
    Suleyman,
    Aytemir,
  ])

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <LeftArrowForCarousel />
      ) : (
        <RightArrowForCarousel />
      )
    return (
      <ContainerForButton>
        <Button onClick={onClick} disabled={isEdge}>
          {pointer}
        </Button>
      </ContainerForButton>
    )
  }
  const myPagination = ({ pages, activePage, onClick }) => {
    return (
      <Pagination>
        {pages.map((page) => {
          const isActivePage = activePage === page
          return (
            <Page
              key={page}
              onClick={() => onClick(page)}
              active={isActivePage}
              style={{
                background: isActivePage && "#2D1168",
              }}
            />
          )
        })}
      </Pagination>
    )
  }
  const isCarousel = useMediaQuery("(max-width:1449px)")
  const isMobile = useMediaQuery("(max-width:907px)")
  const isSmallestMobile = useMediaQuery("(max-width:500px)")
  return (
    <Wrapper>
      <MainContainer>
        <Title>OUR TEAM</Title>
        {isCarousel ? (
          <Carousel
            renderArrow={myArrow}
            renderPagination={myPagination}
            itemsToShow={
              (!isMobile && 3,
              isMobile && 2,
              // isSmallestMobile && 1,
              isSmallestMobile || 2)
            }
            transitionMs={300}
          >
            <Image
              src={Evgeniy}
              alt="Our Team"
              style={{ width: "82%", height: "100%", borderRadius: "8px" }}
            />
            <Image
              src={Becca}
              alt="Our Team"
              style={{ width: "82%", height: "100%", borderRadius: "8px" }}
            />
            <Image
              src={Ivan}
              alt="Our Team"
              style={{ width: "82%", height: "100%", borderRadius: "8px" }}
            />
            <Image
              src={Almaz}
              alt="Our Team"
              style={{ width: "80%", height: "100%", borderRadius: "8px" }}
            />
            <Image
              src={Emir}
              alt="Our Team"
              style={{ width: "80%", height: "100%", borderRadius: "8px" }}
            />
            <Image
              src={Azim}
              alt="Our Team"
              style={{ width: "80%", height: "100%", borderRadius: "8px" }}
            />
            <Image
              src={Saltanat}
              alt="Our Team"
              style={{ width: "82.7%", height: "100%", borderRadius: "8px" }}
            />
            <Image
              src={Suleyman}
              alt="Our Team"
              style={{ width: "80.7%", height: "100%", borderRadius: "8px" }}
            />
            <Image
              src={Aytemir}
              alt="Our Team"
              style={{ width: "80.7%", height: "100%", borderRadius: "8px" }}
            />
          </Carousel>
        ) : (
          <ContainerForImages>
            <FirstRow>
              {images.map((image, index) => {
                while (index <= 4) {
                  return (
                    <ImgDiv>
                      <Image
                        src={image}
                        alt="Our Team"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          borderRadius: "8px",
                        }}
                      />
                    </ImgDiv>
                  )
                }
              })}
            </FirstRow>
            <SecondRow>
              {images.map((image, index) => {
                while (index > 4) {
                  return (
                    <ImgDiv>
                      <Image
                        src={image}
                        alt="Our Team"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          borderRadius: "8px",
                        }}
                      />
                    </ImgDiv>
                  )
                }
              })}
            </SecondRow>
          </ContainerForImages>
        )}
      </MainContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #f6f4ff;
`
const MainContainer = styled.div`
  max-width: 1520px;
  margin: 0px auto;
  padding-top: 70px;
  padding-bottom: 70px;
  @media (max-width: 1607px) {
    margin: 0px 45px;
  }
  @media (max-width: 620px) {
    margin: 0px 16px;
  }
`

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`
const ContainerForImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
`
const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`
const ImgDiv = styled.div`
  max-width: 260px;
  max-height: 340px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Button = styled.button`
  width: 25px;
  height: 56px;
  border: none;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transition: 0.4s;
    background: #e0e0e0;
  }
`
const ContainerForButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Pagination = styled.div`
  width: 87px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`
const Page = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 10px;
  background: #c4c4c4;
`
