import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.nav`
  height: 80%;
  @media screen and (min-width: 1024px) {
    flex-grow: 1;
    height: auto;
  }

  ul {
    height: 70%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 160px;
    @media only screen and (min-width: 1024px) {
      min-height: 260px;
    }
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 41px;
      @media only screen and (min-width: 1024px) {
        height: 51px;
      }
      &:nth-child(1) {
        margin-bottom: 30px;
        @media only screen and (min-width: 1024px) {
          margin-bottom: 70px;
          height: 51px;
        }
      }
      a {
        text-align: center;
        background-color: #d4b726;
        text-decoration: none;
        color: white;
        font-size: 16px;
        font-weight: bold;
        border-radius: 10px;
        display: block;
        width: 70%;
        height: 100%;
        margin: 0 auto;
        line-height: 41px;
        @media only screen and (min-width: 1024px) {
          width: 100%;
          font-size: 26px;
          line-height: 51px;
        }
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
