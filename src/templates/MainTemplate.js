import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { StatsContext } from "../contexts/StatsContext";

import styled from "styled-components";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import SignInModal from "../components/SignInModal";
import LogInModal from "../components/LogInModal";
import firebase from "../firebase";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;
const DescriptionSmall = styled.p`
  color: white;
  font-size: 12px;
  text-align: center;
  margin: 10px 0;
  a {
    color: white;
  }
`;

const Loader = styled.div`
  opacity: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.25s linear;
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const WrapperNavbar = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  height: auto;
  justify-content: center;
  align-items: center;
`;
const MainTemplate = () => {
  const { setUser } = useContext(UserContext);
  const { getStats, setStats } = useContext(StatsContext);

  useEffect(() => {
    const navList = document.querySelector(".nav-list");
    const loader = document.querySelector(".nav-loader");
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUser(user);
        getStats();
        loader.style.opacity = "0";

        setTimeout(() => {
          navList.style.opacity = "1";
        }, 250);
      } else {
        setUser(user);
        setStats([]);
        loader.style.opacity = "0";

        setTimeout(() => {
          navList.style.opacity = "1";
        }, 250);
      }
    });
  }, []);

  return (
    <Background flex className="main-template">
      <Wrapper>
        <Logo big={"big"} />

        <WrapperNavbar>
          <Loader className="nav-loader">
            <div className="lds-ring">
              <div />
              <div />
              <div />
              <div />
            </div>
          </Loader>
          <Navbar />
        </WrapperNavbar>

        <DescriptionSmall>
          © 2019 Design {"&"} Coded by{" "}
          <a href="https://codeverse.pl">Codeverse</a>. Wszystkie prawa
          zastrzeżone.
        </DescriptionSmall>
      </Wrapper>
      <SignInModal />
      <LogInModal />
    </Background>
  );
};

export default MainTemplate;
