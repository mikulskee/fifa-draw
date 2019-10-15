import React, { useContext } from "react";
import styled from "styled-components";
import { ColumnFlexWrapper } from "./ColumnFlexWrapper";
import { Title } from "./Title";
import { ScoresContext } from "../contexts/ScoresContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const StyledColumnFlexWrapper = styled(ColumnFlexWrapper)`
  background-color: #043c56;
  position: fixed;
  top: 116px;
  left: 50%;
  transform: translateX(-50%);
  height: 55px;
  width: 20%;
  border-radius: 10px;
  justify-content: flex-start;
  overflow: hidden;

  &.active {
    height: auto;
    button {
      transform: rotate(180deg);
    }
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
  transition: transform 0.15s linear;
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
`;

const ScoresTable = () => {
  const { tournament } = useContext(ScoresContext);
  const handleClick = e => {
    e.target.parentNode.classList.toggle("active");
    document.querySelector(".player-names").classList.toggle("active");
  };
  return (
    <StyledColumnFlexWrapper>
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

      <Results>
        {tournament.map(tour => (
          <Result key={tour.teams[0].team}>
            <p>{tour.teams[0].team}</p>
            <div className={"image"}>
              <img src={tour.teams[0].img} alt={tour.teams[0].team} />
            </div>

            <h1>{tour.result[0]}</h1>
            <span>:</span>
            <h1>{tour.result[1]}</h1>
            <div className={"image"}>
              <img src={tour.teams[1].img} alt={tour.teams[1].team} />
            </div>
            <p>{tour.teams[1].team}</p>
          </Result>
        ))}
      </Results>

      <div></div>
      <div></div>
    </StyledColumnFlexWrapper>
  );
};

export default ScoresTable;
