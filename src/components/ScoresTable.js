import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ColumnFlexWrapper } from "./ColumnFlexWrapper";
import { Title } from "./Title";
import { ScoresContext } from "../contexts/ScoresContext";
import { TeamsContext } from "../contexts/TeamsContext";
import { PlayersContext } from "../contexts/PlayersContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const StyledColumnFlexWrapper = styled(ColumnFlexWrapper)`
  background-color: #043c56;
  position: fixed;
  top: 116px;
  left: 50%;
  transform: translateX(-50%);
  max-height: 55px;
  width: 20%;
  border-radius: 10px;
  justify-content: flex-start;
  overflow: hidden;
  transition: max-height 0.25s ease-out, width 0.25s 0.25s ease-out;
  &.end {
    max-height: 900px;
    width: 40%;
    .results > * {
      opacity: 1;
    }
    button {
      display: none;
    }
  }

  & .results > * {
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
  }

  &.active {
    max-height: 800px;
    button {
      transform: rotate(180deg);
    }
  }

  &.active .results > * {
    opacity: 1;
  }

  button {
    background: none;
    padding: 10px;
    font-size: 26px;
    color: white;
    border: none;
    position: fixed;
    top: 8px;
    right: 5px;
    cursor: pointer;
    svg {
      pointer-events: none;
    }
    &:focus {
      outline: none;
    }
  }
`;

const StyledTitle = styled(Title)`
  top: 20px;
`;

const PlayersNames = styled.div`
  transform: translateY(-35px);
  margin-top: 55px;
  width: 70%;
  display: flex;
  justify-content: space-between;
  transition: transform 0.25s ease-in-out;
  &.active {
    transform: translateY(-10px);
  }
  h1 {
    position: static;
    color: #d4b726;
    left: auto;
    transform: translateX(0);
  }
`;

const Results = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Result = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;

  .image {
    width: 30px;
    img {
      height: 30px;
    }
  }

  p {
    text-align: center;
    width: 20%;
  }
  p:first-child.team-0 {
    color: #d4b726;
  }
  p:last-child.team-1 {
    color: #d4b726;
  }
`;

const WinnerTitle = styled(Title)`
  width: 100%;
  position: static;
  text-align: center;
  transform: translate(0);
  padding: 20px 0;
  span {
    color: #d4b726;
  }
`;

const ScoresTable = () => {
  const { tournament } = useContext(ScoresContext);
  const { matchTeams } = useContext(TeamsContext);
  const { playerTwoTeams } = useContext(PlayersContext);

  const handleClick = e => {
    e.target.parentNode.classList.toggle("active");
    document.querySelector(".player-names").classList.toggle("active");
  };

  useEffect(() => {
    if (!matchTeams.length) {
      const pl1wins = tournament.filter(tour => tour.win === 0).length;
      const pl2wins = tournament.filter(tour => tour.win === 1).length;
      const requiredWins = (playerTwoTeams.length + tournament.length) / 2;

      if (
        requiredWins < pl1wins ||
        requiredWins < pl2wins ||
        (!playerTwoTeams.length && tournament.length)
      ) {
        document.querySelector(".results-wrapper").classList.add("end");
        document.querySelector(".players-baskets").classList.add("end");
      }
    }
  });

  const [winner, setWinner] = useState("");
  useEffect(() => {
    const pl1wins = tournament.filter(tour => tour.win === 0).length;
    const pl2wins = tournament.filter(tour => tour.win === 1).length;

    const isTournamentFinish = document
      .querySelector(".results-wrapper")
      .classList.contains("end");

    if (isTournamentFinish) {
      const pl1Name = tournament[0].playersNames[0];
      const pl2Name = tournament[0].playersNames[1];
      if (pl1wins > pl2wins) {
        setWinner(pl1Name.toUpperCase());
      } else if (pl1wins < pl2wins) {
        setWinner(pl2Name.toUpperCase());
      } else {
        return;
      }
    }
  }, [tournament]);
  return (
    <StyledColumnFlexWrapper className={"results-wrapper"}>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <StyledTitle small>Wyniki</StyledTitle>
      <PlayersNames className="player-names">
        <Title small>
          {tournament[0].playersNames[0]} (
          {tournament.filter(tour => tour.win === 0).length})
        </Title>
        <Title small>
          {tournament[0].playersNames[1]} (
          {tournament.filter(tour => tour.win === 1).length})
        </Title>
      </PlayersNames>

      <Results className="results">
        {tournament.map(tour => (
          <Result key={tour.teams[0].team}>
            <p className={`team-${tour.win}`}>{tour.teams[0].team}</p>
            <div className={"image"}>
              <img src={tour.teams[0].img} alt={tour.teams[0].team} />
            </div>

            <h1>{tour.result[0]}</h1>
            <span>:</span>
            <h1>{tour.result[1]}</h1>
            <div className={"image"}>
              <img src={tour.teams[1].img} alt={tour.teams[1].team} />
            </div>
            <p className={`team-${tour.win}`}>{tour.teams[1].team}</p>
          </Result>
        ))}
      </Results>

      {winner.length ? (
        <WinnerTitle className="tournament-winner">
          Wygrał gracz <span>{winner}</span>
        </WinnerTitle>
      ) : (
        <WinnerTitle className="tournament-winner">
          Turniej zakończony <span>REMISEM</span>
        </WinnerTitle>
      )}
    </StyledColumnFlexWrapper>
  );
};

export default ScoresTable;
