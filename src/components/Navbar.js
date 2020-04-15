import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import firebase from "../firebase";

const Wrapper = styled.nav`
  height: 80%;
  @media screen and (min-width: 1024px) {
    flex-grow: 1;
    height: auto;
  }

  ul {
    height: 100%;
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
      margin: 15px auto;
      @media only screen and (min-width: 1024px) {
        margin: 25px auto;
        height: 51px;
      }
      a,
      button {
        cursor: pointer;
        border: none;
        box-shadow: none;
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
  const openLogInModal = () => {
    document.querySelector(".login-modal").style.display = "flex";

    setTimeout(() => {
      document.querySelector(".login-modal").style.opacity = "1";
    }, 10);
  };
  const openSignUpModal = () => {
    document.querySelector(".signup-modal").style.display = "flex";

    setTimeout(() => {
      document.querySelector(".signup-modal").style.opacity = "1";
    }, 10);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("wylogowano");
      });
  };
  return (
    <Wrapper>
      <ul>
        <li>
          <button onClick={openLogInModal}>Zaloguj się</button>
        </li>
        <li>
          <button onClick={openSignUpModal}>Zarejestruj się</button>
        </li>
        <li>
          <Link to="/newcup">Nowy Turniej</Link>
        </li>
        <li>
          <Link to="/stats">Statystyki</Link>
        </li>
        <li>
          <Link to="/about">O Aplikacji</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Wyloguj się</button>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Navbar;
