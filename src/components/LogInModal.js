import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import firebase from "../firebase";

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  opacity: 0;
  display: none;
  transition: opacity 0.25s linear;

  form {
    position: relative;
    width: 50vh;
    width: calc(var(--vh, 1vh) * 50);
    height: 50vh;
    height: calc(var(--vh, 1vh) * 50);
    display: flex;
    background-color: #d4b726;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h2 {
      color: white;
    }

    button[type="submit"] {
      cursor: pointer;
      width: 115px;
      height: 45px;
      border: none;
      text-align: center;
      background-color: white;
      text-decoration: none;
      color: #d4b726;
      font-size: 16px;
      font-weight: bold;
      border-radius: 10px;
      display: block;
      margin: 0 auto;
      padding: 5px 10px;
      box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.2);
      @media only screen and (min-width: 1024px) {
        font-size: 26px;
      }
    }

    input[type="email"],
    input[type="password"] {
      width: 70%;
      height: 30px;
      box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.2);
      border: none;
      font-size: 16px;
      padding-left: 20px;
      &::placeholder {
        font-size: 16px;
      }
    }
  }
`;

const Close = styled.button`
  color: white;
  border: none;
  box-shadow: none;
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    margin-top: 10px;
    color: white;
    width: 70%;
  }
`;

const Loader = styled.div`
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 14px;
    height: 14px;
    margin: 3px;
    border: 3px solid #d4b726;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #d4b726 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LogInModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(mail, password)
      .then((cred) => {
        setIsLoading(false);
        document.querySelector(".login-modal").style.opacity = "0";
        setTimeout(() => {
          document.querySelector(".login-modal").style.display = "none";
          setMail("");
          setPassword("");
        }, 250);
      })
      .catch((err) => {
        setPasswordError("");
        setEmailError("");
        if (
          err.message ===
          "The password is invalid or the user does not have a password."
        ) {
          setPasswordError("Podane hasło jest nieprawidłowe.");
          setIsLoading(false);
        }
        if (
          err.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          setEmailError("Brak użytkownika o podanym mailu w bazie danych.");
          setIsLoading(false);
          setPassword("");
        }
      });
  };
  const closeModal = (e) => {
    e.preventDefault();
    document.querySelector(".login-modal").style.opacity = "0";

    setTimeout(() => {
      document.querySelector(".login-modal").style.display = "none";
    }, 250);
  };

  return (
    <Wrapper className="login-modal">
      <form onSubmit={handleSubmit}>
        <h2>Zaloguj się</h2>
        <InputWrapper>
          <input
            type="email"
            placeholder="adres mailowy"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
          <label>{emailError}</label>
        </InputWrapper>
        <InputWrapper>
          <input
            type="password"
            placeholder="hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>{passwordError}</label>
        </InputWrapper>

        <button type="submit">
          {isLoading ? (
            <Loader>
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Loader>
          ) : (
            "Zaloguj się"
          )}
        </button>
        <Close onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </Close>
      </form>
    </Wrapper>
  );
};

export default LogInModal;
