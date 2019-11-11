import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { PlayersContext } from "../contexts/PlayersContext";
import { TeamsContext } from "../contexts/TeamsContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  font-size: 20px;
`;

const DrawingButtons = () => {
  const { players, addTeamForPlayerOne, addTeamForPlayerTwo } = useContext(
    PlayersContext
  );

  const { teamsInBasket, setTeamsInBasket } = useContext(TeamsContext);

  const handleDrawAll = () => {
    let teamsNumber = teamsInBasket.length;
    let teamOne = [];
    let teamTwo = [];

    for (let i = teamsNumber; i > 0; i--) {
      let index = Math.floor(Math.random() * i);
      let teamDraw = teamsInBasket[index];
      if (i % 2 === 0) {
        teamOne.push(teamDraw);
      } else {
        teamTwo.push(teamDraw);
      }
      teamsInBasket.splice(index, 1);
    }
    setTeamsInBasket([]);
    addTeamForPlayerOne(teamOne);
    addTeamForPlayerTwo(teamTwo);
  };

  return (
    <Wrapper>
      <StyledButton>Losuj drużynę dla {players[0].toUpperCase()} </StyledButton>
      <StyledButton onClick={handleDrawAll}>Wylosuj wszystkie</StyledButton>
      <StyledButton>Losuj drużynę dla {players[1].toUpperCase()}</StyledButton>
    </Wrapper>
  );
};

export default DrawingButtons;
