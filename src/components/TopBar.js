import React, { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { StatsContext } from "../contexts/StatsContext";
import { withRouter } from "react-router-dom";
import firebase from "../firebase";
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
    cursor: pointer;
    @media only screen and (min-width: 1024px) {
      font-size: 18px;
    }
  }
`;

const TopBar = (props) => {
  const { setUser } = useContext(UserContext);
  const { getStats, setStats } = useContext(StatsContext);
  const handleLogout = (e) => {
    e.preventDefault();
    props.history.push("/");
    firebase.auth().signOut();
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        getStats(user);
      } else {
        setUser(user);
        setStats([]);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Logo small={"small"} />
      {props.children}
      <button onClick={handleLogout}>Wyloguj się</button>
    </Wrapper>
  );
};

export default withRouter(TopBar);
