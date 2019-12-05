import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";
import { PlayersContext } from "../contexts/PlayersContext";
import { TeamsContext } from "../contexts/TeamsContext";
import DrawTeamAnimation from "./DrawTeamAnimation";
import { DrawAnimation } from "../animations/DrawAnimation";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0px auto;
  max-width: 1460px;
`;

const StyledButton = styled(Button)`
  font-size: 14px;
  height: auto;
  padding: 10px 15px;
  opacity: ${({ disabled }) => (disabled ? "40%" : "100%")};
  ${({ disabled }) =>
    disabled &&
    css`
      :hover::after {
        transform: translate(-50%, 50%);
      }
      :hover {
        color: white;
      }
    `}
`;
const StyledButtonDisabled = styled(Button)`
  font-size: 14px;
  height: auto;
  padding: 10px 15px;
  opacity: 0.4;
  :hover::after {
    transform: translate(-50%, 50%);
  }
  :hover {
    color: white;
  }
`;

const DrawingButtons = () => {
  const {
    players,
    addTeamForPlayerOne,
    addTeamForPlayerTwo,
    playerOneTeams,
    playerTwoTeams
  } = useContext(PlayersContext);

  const { teamsInBasket, setTeamsInBasket } = useContext(TeamsContext);
  const [drawedTeam, setDrawedTeam] = useState({});
  const handleDrawAll = () => {
    let teamsNumber = teamsInBasket.length;
    let teamOne = [];
    let teamTwo = [];

    for (let i = teamsNumber; i > 0; i--) {
      let index = Math.floor(Math.random() * i);
      let teamDraw = teamsInBasket[index];

      if (playerTwoTeams.length > playerOneTeams.length) {
        if (i % 2 === 0) {
          teamTwo.push(teamDraw);
        } else {
          teamOne.push(teamDraw);
        }
      } else {
        if (i % 2 === 0) {
          teamOne.push(teamDraw);
        } else {
          teamTwo.push(teamDraw);
        }
      }

      teamsInBasket.splice(index, 1);
    }
    setTeamsInBasket([]);
    addTeamForPlayerOne(teamOne);
    addTeamForPlayerTwo(teamTwo);
  };

  const handleDrawForPlayer = e => {
    let teamsNumber = teamsInBasket.length;
    let index = Math.floor(Math.random() * teamsNumber);
    let teamDraw = teamsInBasket[index];
    if (teamsNumber === 1) {
      if (e.target.dataset.player === players[0]) {
        setDrawedTeam(teamDraw);
        addTeamForPlayerOne(teamDraw);
      } else if (e.target.dataset.player === players[1]) {
        setDrawedTeam(teamDraw);
        addTeamForPlayerTwo(teamDraw);
      }
    } else {
      if (e.target.dataset.player === players[0]) {
        setDrawedTeam(teamDraw);
        DrawAnimation();
        setTimeout(() => {
          addTeamForPlayerOne(teamDraw);
        }, 1000);
      } else if (e.target.dataset.player === players[1]) {
        setDrawedTeam(teamDraw);
        DrawAnimation();
        setTimeout(() => {
          addTeamForPlayerTwo(teamDraw);
        }, 1000);
      }
    }

    teamsInBasket.splice(index, 1);
  };

  return (
    <Wrapper>
      {playerOneTeams.length <= playerTwoTeams.length ? (
        <StyledButton data-player={players[0]} onClick={handleDrawForPlayer}>
          Losuj drużynę dla {players[0].toUpperCase()}{" "}
        </StyledButton>
      ) : (
        <StyledButtonDisabled>
          Losuj drużynę dla {players[0].toUpperCase()}{" "}
        </StyledButtonDisabled>
      )}
      <StyledButton onClick={handleDrawAll}>Wylosuj wszystkie</StyledButton>
      {playerOneTeams.length !== playerTwoTeams.length ? (
        <StyledButton data-player={players[1]} onClick={handleDrawForPlayer}>
          Losuj drużynę dla {players[1].toUpperCase()}
        </StyledButton>
      ) : (
        <StyledButtonDisabled
          data-player={players[1]}
          onClick={handleDrawForPlayer}
        >
          Losuj drużynę dla {players[1].toUpperCase()}
        </StyledButtonDisabled>
      )}
      <DrawTeamAnimation drawTeam={drawedTeam} />
    </Wrapper>
  );
};

export default DrawingButtons;
