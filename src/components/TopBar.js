import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  background-color: #043c56;
  color: white;
  border-radius: 10px;
  margin: 10px auto 0;
  padding: 5px 0;
  min-height: 40px;

  button {
    border: none;
    box-shadow: none;
    text-align: center;
    background-color: #d4b726;
    text-decoration: none;
    color: white;
    font-size: 12px;
    font-weight: bold;
    border-radius: 10px;
    display: block;
    height: 100%;
    margin: 0 10px;
    padding: 5px 10px;
    line-height: 41px;
    @media only screen and (min-width: 1024px) {
      font-size: 18px;
    }
  }
`;

const TopBar = (props) => {
  return (
    <Wrapper>
      <Logo small={"small"} />
      {props.children}
      <button>wyloguj się</button>
    </Wrapper>
  );
};

export default TopBar;
