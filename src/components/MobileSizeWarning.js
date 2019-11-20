import React, { useEffect } from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { scalingBrowser } from "../animations/scalingBrowser";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 20px 30px 0;
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
`;
const Browser = styled.div`
  position: relative;
  margin-top: 30px;
  width: 80px;
  height: 50px;
  border: 1px solid white;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  align-self: center;
  transform: scaleX(0.9);
  will-change: transform;
  @media only screen and (orientation: landscape) {
    position: absolute;
  }

  .top-bar {
    position: relative;
    width: 100%;
    height: 20%;
    border-bottom: 1px solid white;

    div {
      position: absolute;
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
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .arrow-left {
      position: relative;
      width: 25px;
      height: 1px;
      margin-left: 5px;
      background-color: #fff;

      ::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        display: block;
        width: 6px;
        height: 1px;
        background-color: #fff;
        transform: rotate(45deg);
        transform-origin: center left;
      }
      ::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        display: block;
        width: 6px;
        height: 1px;
        background-color: #fff;
        transform: rotate(-45deg);
        transform-origin: center left;
      }
    }
    .arrow-right {
      position: relative;
      width: 25px;
      height: 1px;
      margin-right: 5px;
      background-color: #fff;
      ::before {
        position: absolute;
        top: 0;
        right: 0;
        content: "";
        display: block;
        width: 6px;
        height: 1px;
        background-color: #fff;
        transform: rotate(45deg);
        transform-origin: center right;
      }
      ::after {
        position: absolute;
        bottom: 0;
        right: 0;
        content: "";
        display: block;
        width: 6px;
        height: 1px;
        background-color: #fff;
        transform: rotate(-45deg);
        transform-origin: center right;
      }
    }
  }
`;
const MobileSizeWarning = () => {
  useEffect(() => {
    scalingBrowser();
  });
  return (
    <Wrapper>
      <StyledTitle relative>Ekran jest zbyt mały!</StyledTitle>
      <SubTitle>Powiększ okno swojej przeglądarki</SubTitle>
      <Description>
        Korzystanie z aplikacji <br /> w najbardziej optymalny <br /> i
        przejrzysty sposób wymaga większego ekranu. Nie chyba chcemy zebyś
        przegapił jakąkolwiek bramkę...
      </Description>
      <Browser className={"browser-icon"}>
        <div className="top-bar">
          <div />
          <div />
          <div />
        </div>
        <div className="content">
          <div className="arrow-left" />
          <div className="arrow-right" />
        </div>
      </Browser>
    </Wrapper>
  );
};

export default MobileSizeWarning;
