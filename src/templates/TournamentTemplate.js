import React, { useContext } from "react";
import { PlayersContext } from "../contexts/PlayersContext";
import { TeamsContext } from "../contexts/TeamsContext";
import { ScoresContext } from "../contexts/ScoresContext";
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
import MatchResults from "../components/MatchResult";
import ScoresTable from "../components/ScoresTable";

const DateDescription = styled.span`
  font-weight: 300;
  font-size: 16px;
`;
const StyledTitle = styled(Title)`
  line-height: 0.7;
`;
const StyledButton = styled(Button)`
  position: fixed;
  bottom: 20px;
  font-size: 16px;
`;
const TournamentTemplate = props => {
  const {
    players,
    playerOneTeams,
    playerTwoTeams,
    deletePlayerOneTeam,
    deletePlayerTwoTeam
  } = useContext(PlayersContext);

  const { teamsInBasket, setTeam, matchTeams } = useContext(TeamsContext);

  const { tournament } = useContext(ScoresContext);

  const handleClick = e => {
    console.log(matchTeams);

    if (matchTeams.length > 1) {
      return;
    } else {
      const teams = playerOneTeams.concat(playerTwoTeams);
      const selectedTeam = teams.filter(team => team.team === e.target.alt);
      if (
        e.target.classList.contains("player-one") &&
        playerOneTeams.length === playerTwoTeams.length
      ) {
        deletePlayerOneTeam(selectedTeam);
        setTeam(selectedTeam);
      } else if (
        e.target.classList.contains("player-two") &&
        playerOneTeams.length < playerTwoTeams.length
      ) {
        deletePlayerTwoTeam(selectedTeam);
        setTeam(selectedTeam);
      }
    }
  };

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
              {playerOneTeams.map((team, id) => (
                <li key={team.id}>
                  <div>
                    <h1>{id + 1}.</h1>
                    <img
                      src={team.img}
                      alt={team.team}
                      onClick={handleClick}
                      className="player-one"
                    ></img>
                  </div>
                </li>
              ))}
            </TeamsTable>

            {playerOneTeams.length > 0 && matchTeams.length === 0 ? (
              <Title className={"choose-team"}>Wybierz drużynę</Title>
            ) : null}
          </PlayerBasket>
          <PlayerBasket>
            <Title>Team {players[1].toUpperCase()}</Title>
            <TeamsTable column>
              {playerTwoTeams.map((team, id) => (
                <li key={team.id}>
                  <div>
                    <h1>{id + 1}.</h1>
                    <img
                      src={team.img}
                      alt={team.team}
                      onClick={handleClick}
                      className="player-two"
                    ></img>
                  </div>
                </li>
              ))}
            </TeamsTable>
            {matchTeams.length === 1 ? (
              <Title className={"choose-team"}>Wybierz drużynę</Title>
            ) : null}
          </PlayerBasket>
        </PlayersTeams>
        {teamsInBasket.length === 0 ? (
          <StyledButton>Zakończ turniej</StyledButton>
        ) : null}

        {playerOneTeams.length !== 0 && playerTwoTeams.length !== 0 ? (
          <MatchResults />
        ) : null}
        {tournament.length > 0 ? <ScoresTable /> : null}
      </Background>
    );
  } else return null;
};

export default TournamentTemplate;
