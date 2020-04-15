import React from "react";
import styled from "styled-components";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import SignInModal from "../components/SignInModal";
import LogInModal from "../components/LogInModal";

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

const MainTemplate = () => {
  return (
    <Background flex className="main-template">
      <Wrapper>
        <Logo big={"big"} />
        <Navbar />
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
