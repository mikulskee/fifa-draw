import React, { useContext } from "react";
import { PlayersContext } from "../contexts/PlayersContext";
import { TeamsContext } from "../contexts/TeamsContext";
import { ScoresContext } from "../contexts/ScoresContext";
import { StatsContext } from "../contexts/StatsContext";
import Background from "../components/Background";
import TopBar from "../components/TopBar";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import Basket from "../components/Basket";
import DrawingButtons from "../components/DrawingButtons";
import { PlayersTeams } from "../components/PlayersTeams";
import { PlayerBasket } from "../components/PlayerBasket";
import moment from "moment";
import "moment/locale/pl";
import styled from "styled-components";
import TeamsTable from "../components/TeamsTable";
import MatchResults from "../components/MatchResult";
import ScoresTable from "../components/ScoresTable";
import { LoaderAnimation } from "../animations/LoaderAnimation";
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
    setPlayers,
    setSubmitPlayers,
    players,
    playerOneTeams,
    playerTwoTeams,
    deletePlayerOneTeam,
    deletePlayerTwoTeam,
    setPlayerTwoTeams,
    setPlayerOneTeams
  } = useContext(PlayersContext);

  const { teamsInBasket, setTeam, matchTeams, setTeamsInBasket } = useContext(
    TeamsContext
  );
  const { addTournamentToStats } = useContext(StatsContext);
  const {
    tournament,
    isTournamentEnd,
    setTournamentEnd,
    setTournament,
    setWinner
  } = useContext(ScoresContext);

  const handleClick = e => {
    if (teamsInBasket.length === 0) {
      if (matchTeams.length > 1) {
        return;
      } else {
        const matchResults = document.querySelector(".results-wrapper");
        const playerNames = document.querySelector(".player-names");
        const teams = playerOneTeams.concat(playerTwoTeams);
        const selectedTeam = teams.filter(team => team.team === e.target.alt);

        if (matchResults) {
          matchResults.classList.remove("active");
          playerNames.classList.remove("active");
        }
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
    } else return;
  };
  const endTournament = () => {
    document.querySelector(".results-wrapper").classList.add("end");
    document.querySelector(".baskets-dashboard").classList.add("end");
    document.querySelector(".tournament-winner").classList.add("end");
    setPlayerTwoTeams([]);
    setPlayerOneTeams([]);
    setTournamentEnd(true);
  };
  const closeTournament = () => {
    addTournamentToStats();
    LoaderAnimation();
    setTimeout(() => {
      props.history.push("/");
      setPlayers([]);
      setSubmitPlayers(false);
      setTeamsInBasket([]);
      setTournament([]);
      setWinner("");
      setTournamentEnd(false);
    }, 1000);
  };

  if (players.length > 0) {
    return (
      <Background flex className="tournament">
        <TopBar>
          <StyledTitle>
            Turniej
            <br />
            <DateDescription>
              {moment(new Date())
                .locale("pl")
                .calendar()}
            </DateDescription>
          </StyledTitle>
        </TopBar>

        <PlayersTeams className={"baskets-dashboard"}>
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

            {(teamsInBasket.length === 0 && matchTeams.length) === 0 ? (
              <Title className={"choose-team"}>Wybierz drużynę</Title>
            ) : null}
          </PlayerBasket>
          {teamsInBasket.length === 0 ? null : <Basket />}
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
        {teamsInBasket.length === 0 ? null : <DrawingButtons />}
        {playerTwoTeams.length > 0 && tournament.length > 0 ? (
          <StyledButton onClick={endTournament}>Zakończ turniej</StyledButton>
        ) : null}
        {isTournamentEnd ? (
          <StyledButton onClick={closeTournament}>Koniec</StyledButton>
        ) : null}

        {tournament.length >= 0 && matchTeams.length > 0 ? (
          <MatchResults />
        ) : null}
        {tournament.length > 0 ? <ScoresTable /> : null}
      </Background>
    );
  } else return null;
};

export default TournamentTemplate;
