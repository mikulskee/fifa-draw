import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  background-color: #043c56;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  width: 200px;
  padding: 7px 16px;
  color: white;
  font-size: 34px;
  transform: translate(0);
  cursor: pointer;
  @media only screen and (min-width: 1024px) {
    width: 260px;
    padding: 7px 24px;
  }

  div.title {
    display: flex;
    flex-direction: column;
    span.title {
      font-weight: bold;
      font-size: 16px;
      @media only screen and (min-width: 1024px) {
        font-size: 26px;
      }
    }
    span.date {
      font-weight: lighter;
      font-size: 10px;
      @media only screen and (min-width: 1024px) {
        font-size: 16px;
      }
    }
  }
  div.winner-name {
    color: #d4b726;
    font-weight: bold;
    font-size: 20px;
    @media only screen and (min-width: 1024px) {
      font-size: 28px;
    }
  }

  button {
    background: none;
    font-size: 24px;
    border: none;
    color: white;
    padding: 5px 15px;
    cursor: pointer;
    @media only screen and (min-width: 1024px) {
      font-size: 34px;
      padding: 5px 10px;
    }
    svg {
      pointer-events: none;
    }
  }
`;

const StatsTournamentCard = props => {
  const { tournamentNumber, date, winner, id } = props;
  const openDetails = e => {
    props.history.push(`/stats/${id}`);
  };
  return (
    <Wrapper className="stats-tournament-card" onClick={openDetails}>
      <div className="title">
        <span className="title">Turniej {tournamentNumber}</span>
        <span className="date">{date}</span>
      </div>
      <div className="winner-name">{winner ? winner : "REMIS"}</div>
      <button onClick={openDetails}>
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </Wrapper>
  );
};

export default withRouter(StatsTournamentCard);
