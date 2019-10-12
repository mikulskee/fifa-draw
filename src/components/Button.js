import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  background: none;
  border: none;
  box-shadow: none;
  height: 51px;
  color: white;
  font-size: 34px;
  font-weight: bold;
  border-radius: 10px;
  padding: 0 20px;
  display: block;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.2s linear;

  ::before {
    position: absolute;
    display: block;
    content: "";
    width: 200%;
    height: 200%;
    background-color: #d4b726;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -2;
  }
  ::after {
    position: absolute;
    display: block;
    content: "";
    width: 150%;
    height: 150%;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    transform-origin: center;
    z-index: -1;
    transition: transform 0.2s linear;
  }

  :hover::after {
    transform: translate(-50%, -50%);
  }
  :hover {
    color: #d4b726;
  }
`;
