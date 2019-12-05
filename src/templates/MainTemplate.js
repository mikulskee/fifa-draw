import React from "react";
import styled from "styled-components";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const MainTemplate = () => {
  return (
    <Background flex className="main-template">
      <Wrapper>
        <Logo big={"big"} />
        <Navbar />
      </Wrapper>
    </Background>
  );
};

export default MainTemplate;
