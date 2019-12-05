import React, { useEffect } from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { scalingBrowser } from "../animations/scalingBrowser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import mainBg from "../images/main-bg.jpg";

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 20px 30px 0;
  background-image: url(${mainBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledTitle = styled(Title)`
  font-size: calc(1.4rem + 5vw);
  position: static;
  left: 0;
  transform: translateX(0);
  margin-bottom: 30px;
  color: #ff1f44;
  @media only screen and (orientation: landscape) {
    font-size: calc(1.4rem + 2vw);
  }
`;

const SubTitle = styled.h3`
  font-family: "Big Shoulders Display", sans-serif;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: calc(0.85rem + 0.9vw);
  width: 150px;
`;
const Description = styled.p`
  font-family: "Ibarra Real Nova", serif;
  color: #b4b4b4;
  font-weight: 400;
  line-height: 1.6;
  font-size: calc(0.6rem + 0.9vw);
  margin-top: 10px;
  display: block;
  width: 150px;
  @media only screen and (orientation: landscape) {
    width: 180px;
    font-size: calc(0.6rem + 0.5vw);
  }
  @media only screen and (min-width: 768px) {
    width: 180px;
  }
`;
const Browser = styled.div`
  position: relative;
  margin-top: 30px;
  width: 50px;
  height: 90px;
  border: 1px solid white;
  border-radius: 4px;
  align-self: center;
  opacity: 0;
  visibility: hidden;
  /* transform: rotate(90deg); */
  will-change: transform;
  @media only screen and (orientation: landscape) {
    position: absolute;
  }

  .top-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 14%;
    border-bottom: 1px solid white;

    div {
      margin: 0 2px;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background: #fff;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
    }
    div:nth-child(2) {
      left: 10px;
    }
    div:last-child {
      left: 15px;
    }
  }

  .content {
    width: 100%;
    height: 72%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .aside-right {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18%;
      height: 100%;
      border-right: 1px solid white;
      transform: translateX(2px);
      opacity: 0;
      div {
        width: 60%;
        height: 90%;
        border: 1px solid white;
        background-color: #fff;
        border-radius: 3px;
      }
    }

    .aside-middle {
      width: 74%;
      height: 100%;
      background-color: green;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      svg {
        transform: rotate(-90deg);
        opacity: 0;
      }
    }

    .aside-left {
      width: 8%;
      height: 100%;
      border-left: 1px solid white;
      transform: translateX(-2px);
      opacity: 0;
    }
  }

  .bottom-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 14%;
    border-top: 1px solid white;
    div {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      border: 1px solid white;
    }
  }
`;
const MobileSizeWarning = () => {
  useEffect(() => {
    scalingBrowser();
  });

  return (
    <Wrapper>
      <StyledTitle relative>Ekran jest zbyt wąski!</StyledTitle>
      <SubTitle>Zmień orientację przeglądarki na poziomą</SubTitle>
      <Description>
        Korzystanie z aplikacji <br /> w najbardziej optymalny <br /> i
        przejrzysty sposób wymaga ekranu w pozycji horyzontalnej. Nie chcemy
        chyba żebyś przegapił jakąkolwiek bramkę...
      </Description>
      <Browser className={"browser-icon"}>
        <div className="top-bar">
          <div />
          <div />
          <div />
        </div>
        <div className="content">
          <div className="aside-right">
            <div />
          </div>
          <div className="aside-middle">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div className="aside-left" />
        </div>
        <div className="bottom-bar">
          <div />
        </div>
      </Browser>
    </Wrapper>
  );
};

export default MobileSizeWarning;
