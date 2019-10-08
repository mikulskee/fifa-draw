import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  background-color: #043c56;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  width: 311px;
  margin-top: 40px;
  padding: 7px 44px;
  color: white;
  font-size: 34px;
  div.title {
    display: flex;
    flex-direction: column;
    span.title {
      font-weight: bold;
    }
    span.date {
      font-weight: lighter;
      font-size: 18px;
    }
  }
  div.winner-name {
    color: #d4b726;
    font-weight: bold;
  }
`;

const StatsTournamentCard = () => {
  return (
    <Wrapper>
      <div className="title">
        <span className="title">Turniej 1</span>
        <span className="date">22.10.2019 19:45:26</span>
      </div>
      <div className="winner-name">Mateo</div>
      <FontAwesomeIcon icon={faCaretRight} />
    </Wrapper>
  );
};

export default StatsTournamentCard;
