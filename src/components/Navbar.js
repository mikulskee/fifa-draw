import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.nav`
  flex-grow: 1;
  ul {
    margin-top: 15px;
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70;
    li {
      display: block;
      width: 200px;
      &:nth-child(1) {
        margin-bottom: 70px;
      }
      a {
        display: flex;
        align-items: center;
        text-align: center;
        background-color: #d4b726;
        text-decoration: none;
        color: white;
        font-size: 26px;
        font-weight: bold;
        border-radius: 10px;
        display: block;
        width: 100%;
        height: 100%;
        line-height: 51px;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/newcup">Nowy Turniej</Link>
        </li>
        <li>
          <Link to="/stats">Statystyki</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Navbar;
