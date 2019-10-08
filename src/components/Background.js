import React from "react";
import styled from "styled-components";
import mainBg from "../images/main-bg.png";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url(${mainBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Background = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Background;
