import React from "react";
import styled from "styled-components";
import logo from "../images/logo-white-png.png";

const CardBlack = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -200;
  background-color: #121212;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;

  transform: translateY(100%);
  img {
    height: 17vw;
  }
`;
const CardWhite = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -200;
  background-color: #fff;
  top: 0;
  left: 0;
  transform: translateY(100%);
`;

const Loader = () => {
  return (
    <>
      <CardBlack className="card-black">
        <img src={logo} alt="logo FifaDraw" />
      </CardBlack>
      <CardWhite className="card-white" />
    </>
  );
};

export default Loader;
