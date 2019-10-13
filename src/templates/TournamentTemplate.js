import React, { useContext } from "react";
import { PlayersContext } from "../contexts/PlayersContext";
import { TeamsContext } from "../contexts/TeamsContext";
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
import TeamsTable from "../components/TeamsTable";

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
  const { players, playerOneTeams, playerTwoTeams } = useContext(
    PlayersContext
  );
  const { teamsInBasket } = useContext(TeamsContext);
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

        {teamsInBasket.length === 0 ? null : (
          <>
            <Basket />
            <DrawingButtons />
          </>
        )}

        <PlayersTeams>
          <PlayerBasket>
            <Title>Team {players[0].toUpperCase()}</Title>
            <TeamsTable column>
              {playerOneTeams.map(team => (
                <li key={team.id}>
                  <div>
                    <img src={team.img} alt={team.team}></img>
                  </div>
                </li>
              ))}
            </TeamsTable>
          </PlayerBasket>
          <PlayerBasket>
            <Title>Team {players[1].toUpperCase()}</Title>
            <TeamsTable column>
              {playerTwoTeams.map(team => (
                <li key={team.id}>
                  <div>
                    <img src={team.img} alt={team.team}></img>
                  </div>
                </li>
              ))}
            </TeamsTable>
          </PlayerBasket>
        </PlayersTeams>
        <StyledButton>Zakończ turniej</StyledButton>
      </Background>
    );
  } else return null;
};

export default TournamentTemplate;
