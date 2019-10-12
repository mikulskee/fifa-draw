import React, { useContext } from "react";
import { PlayersContext } from "../contexts/PlayersContext";
import Background from "../components/Background";
import TopBar from "../components/TopBar";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import Basket from "../components/Basket";
import DrawingButtons from "../components/DrawingButtons";
import { PlayersTeams } from "../components/PlayersTeams";
import { PlayerBasket } from "../components/PlayerBasket";
import moment from "moment";
import styled from "styled-components";

const DateDescription = styled.span`
  font-weight: 300;
  font-size: 16px;
`;
const StyledTitle = styled(Title)`
  line-height: 0.7;
`;
const StyledButton = styled(Button)`
  font-size: 16px;
`;
const TournamentTemplate = () => {
  const { players } = useContext(PlayersContext);
  if (players.length > 0) {
    return (
      <Background flex tournament>
        <TopBar>
          <StyledTitle>
            Turniej
            <br />
            <DateDescription>{moment(new Date()).calendar()}</DateDescription>
          </StyledTitle>
        </TopBar>
        <Basket />
        <DrawingButtons />
        <PlayersTeams>
          {players.map(player => (
            <PlayerBasket>
              <Title>Team {player.toUpperCase()}</Title>
            </PlayerBasket>
          ))}
        </PlayersTeams>
        <StyledButton>Zakończ turniej</StyledButton>
      </Background>
    );
  } else return null;
};

export default TournamentTemplate;
