import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ColumnFlexWrapper } from "./ColumnFlexWrapper";
import { Title } from "./Title";
import { ScoresContext } from "../contexts/ScoresContext";
import { TeamsContext } from "../contexts/TeamsContext";
import { PlayersContext } from "../contexts/PlayersContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  showWinnerAnimation,
  showResults
} from "../animations/endOfTournamentAnimation";
import { TimelineMax } from "gsap/all";

const StyledColumnFlexWrapper = styled(ColumnFlexWrapper)`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: #043c56;
  width: 100%;
  height: 100%;

  border-radius: 10px;
  justify-content: flex-start;
  overflow: hidden;
  padding-bottom: 20px;

  &.end {
    width: 100%;
    @media only screen and (min-width: 1024px) and (max-height: 400px) {
      min-height: 240px;
    }

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
    @media only screen and (min-width: 1024px) and (max-height: 350px) {
      min-height: 260px;
    }
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
    top: -6px;
    right: 5px;
    cursor: pointer;
    @media only screen and (min-width: 1024px) {
      top: 5px;
    }
    svg {
      pointer-events: none;
    }
    &:focus {
      outline: none;
    }
  
`;

const StyledTitle = styled(Title)`
  top: 10px;
  font-size: 14px;
  @media only screen and (min-width: 1024px) {
    top: 20px;
  }
`;

const PlayersNames = styled.div`
  transform: translateY(-35px);
  margin-top: 42px;
  width: 70%;
  display: flex;
  justify-content: space-between;
  transition: transform 0.25s ease-in-out;
  @media only screen and (min-width: 1024px) {
    margin-top: 55px;
  }
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

const Results = styled.ul`
  width: 90%;
  flex-direction: column;
  align-items: center;
  list-style: none;
  height: 70%;
  overflow: auto;
  display: none;

  @media only screen and (min-width: 1024px) {
    width: 80%;
  }
  li {
    width: 100%;
    margin: 5px 0;
    @media only screen and (min-width: 1024px) {
      margin: 0;
    }
  }
`;
const Result = styled.div`
  margin: 3px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  @media only screen and (min-width: 1336px) {
    margin: 10px 0;
  }

  .image {
    /* width: 30px; */
    margin: 0 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 20px;
      @media only screen and (min-width: 1336px) {
        height: 30px;
      }
    }
  }

  p {
    text-align: center;
    width: 30%;
    font-size: 13px;
    @media only screen and (min-width: 1024px) {
      width: 20%;
      font-size: 16px;
    }
  }
  p:first-child.team-0 {
    color: #d4b726;
  }
  p:last-child.team-1 {
    color: #d4b726;
  }

  h3 {
    @media only screen and (min-width: 1336px) {
      font-size: 28px;
    }
  }
`;

const WinnerTitle = styled(Title)`
  width: 100%;
  position: static;
  text-align: center;
  opacity: 0;
  display: none;
  transform: translate(0, 100%);
  padding: 10px 0;

  @media only screen and (min-width: 1024px) {
    padding: 10px 0 10px;
  }

  span {
    color: #d4b726;
  }
`;

const PlayerNameTitle = styled(Title)`
  font-size: 16px;
`;

const ScoresTable = () => {
  const {
    tournament,
    winner,
    showWinner,
    setTournamentEnd,
    isTournamentEnd
  } = useContext(ScoresContext);
  const { matchTeams } = useContext(TeamsContext);
  const { playerTwoTeams, setPlayerTwoTeams, setPlayerOneTeams } = useContext(
    PlayersContext
  );

  const handleClick = e => {
    e.target.parentNode.classList.toggle("active");
    document.querySelector(".player-names").classList.toggle("active");
    document.querySelector(".end-wrapper").classList.toggle("active");
    document.querySelector("ul.results").classList.toggle("active");
    const ul = document.querySelector("ul.results");

    if (ul.classList.contains("active")) {
      showResults();
    } else {
      const tl = new TimelineMax();
      tl.set(ul, {
        css: { display: "none" }
      });
    }
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
        document.querySelector(".baskets-dashboard").classList.add("end");
        setTournamentEnd(true);
      }
    }
  });

  useEffect(() => {
    const isTournamentFinish = document
      .querySelector(".results-wrapper")
      .classList.contains("end");

    if (isTournamentFinish) {
      document.querySelector(".tournament-winner").classList.add("end");
      document.querySelector(".end-wrapper").classList.add("end");
      document.querySelector(".player-names").classList.add("active");
      showResults();

      showWinnerAnimation();
      showWinner();
    }
  });

  useEffect(() => {
    if (isTournamentEnd) {
      setPlayerTwoTeams([]);
      setPlayerOneTeams([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTournamentEnd]);

  return (
    <StyledColumnFlexWrapper className={"results-wrapper"}>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <StyledTitle small>Wyniki</StyledTitle>
      <PlayersNames className="player-names">
        <PlayerNameTitle small>
          {tournament[0].playersNames[0]} (
          {tournament.filter(tour => tour.win === 0).length})
        </PlayerNameTitle>
        <PlayerNameTitle small>
          {tournament[0].playersNames[1]} (
          {tournament.filter(tour => tour.win === 1).length})
        </PlayerNameTitle>
      </PlayersNames>

      <Results className="results">
        {tournament.map(tour => (
          <li key={tour.teams[0].team}>
            <Result>
              <p className={`team-${tour.win}`}>{tour.teams[0].team}</p>
              <div className={"image"}>
                <img src={tour.teams[0].img} alt={tour.teams[0].team} />
              </div>
              <h3>{tour.result[0]}</h3>
              <span>:</span>
              <h3>{tour.result[1]}</h3>
              <div className={"image"}>
                <img src={tour.teams[1].img} alt={tour.teams[1].team} />
              </div>
              <p className={`team-${tour.win}`}>{tour.teams[1].team}</p>
            </Result>
          </li>
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
