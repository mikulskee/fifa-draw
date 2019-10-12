import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { PlayersContext } from "../contexts/PlayersContext";

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
  const { players } = useContext(PlayersContext);
  return (
    <Wrapper>
      <StyledButton>Losuj drużynę dla {players[0].toUpperCase()} </StyledButton>
      <StyledButton>Wylosuj wszystkie</StyledButton>
      <StyledButton>Losuj drużynę dla {players[1].toUpperCase()}</StyledButton>
    </Wrapper>
  );
};

export default DrawingButtons;
