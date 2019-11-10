import React from "react";
import styled from "styled-components";
import logo from "../images/logo-white-png.png";

const CardBlue = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 999999;
  background-color: #043c56;
  transform: translateY(100%);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 17vw;
  }
`;

const CardWhite = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 999998;
  background-color: #ffffff;
  transform: translateY(100%);
`;

const Loader = () => {
  return (
    <>
      <CardBlue className="card-blue">
        <img src={logo} alt="logo FifaDraw" />
      </CardBlue>
      <CardWhite className="card-white" />
    </>
  );
};

export default Loader;
