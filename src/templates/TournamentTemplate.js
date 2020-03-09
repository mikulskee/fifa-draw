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
import { MainDashboard } from "../components/MainDashboard";
import { PlayerBasket } from "../components/PlayerBasket";
import moment from "moment";
import "moment/locale/pl";
import styled from "styled-components";
import TeamsTable from "../components/TeamsTable";
import MatchResults from "../components/MatchResult";
import ScoresTable from "../components/ScoresTable";
import { LoaderAnimation } from "../animations/LoaderAnimation";
import Redirect from "../components/Redirect";
import {
  showWinnerAnimation,
  showResults
} from "../animations/endOfTournamentAnimation";

const Wrapper = styled.div`
  position: relative;
  height: 80%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  max-height: 640px;
  min-height: 350px;
  margin: 0 0 30px;

  @media only screen and (min-width: 1024px) {
    flex-grow: 1;
  }
`;

const PlayerBasketWrap = styled.div`
  position: relative;
  height: 90%;
  width: 27%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1.choose-team {
    color: #d4b726;
    position: absolute;
    bottom: -50px;
    left: 0;
    width: 100%;
    animation: shake 4s 4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
    transform: translate3d(0, 0, 0);
    @keyframes shake {
      7%,
      15% {
        transform: translate3d(-1px, 0, 0);
      }

      8%,
      14% {
        transform: translate3d(2px, 0, 0);
      }

      9%,
      11%,
      13% {
        transform: translate3d(-4px, 0, 0);
      }

      10%,
      12% {
        transform: translate3d(4px, 0, 0);
      }
      16% {
        transform: translate3d(0, 0, 0);
      }
    }
  }
`;

const EndWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 43%;
  height: 35px;
  z-index: 99999;
  max-width: 650px;

  transition: height 0.25s ease-out, width 0.25s 0.25s ease-out;
  will-change: height, width;

  &.active {
    height: 80%;
  }
  &.end {
    height: 80%;
    width: 55%;
    max-height: 8000px;
    max-width: 7500px;
    @media only screen and (min-width: 1024px) and (max-height: 400px) {
      min-height: 260px;
    }
  }
  @media only screen and (min-width: 1024px) {
    top: 10px;
    height: 55px;
  }
  @media only screen and (min-width: 1336px) {
    max-height: 9000px;
  }
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 1024px) {
    margin: 10px auto;
    width: 95%;
  }
`;
const DateDescription = styled.span`
  font-weight: 300;
  font-size: 12px;
`;
const StyledTitle = styled(Title)`
  line-height: 0.7;
`;
const StyledButton = styled(Button)`
  font-size: 16px;
`;
const EndButton = styled(Button)`
  font-size: 16px;
  position: absolute;
  height: 41px;
  bottom: -85px;
  left: 50%;
  margin: 30px 0;
  transform: translateX(-50%);
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
    setWinner,
    isTournamentStarted,
    setTournamentStart
  } = useContext(ScoresContext);

  const handleClick = e => {
    if (teamsInBasket.length === 0) {
      if (matchTeams.length > 1) {
        return;
      } else {
        const matchResults = document.querySelector(".results-wrapper");
        const playerNames = document.querySelector(".player-names");
        const endWrapper = document.querySelector(".end-wrapper");
        const teams = playerOneTeams.concat(playerTwoTeams);
        const selectedTeam = teams.filter(team => team.team === e.target.alt);

        if (matchResults) {
          matchResults.classList.remove("active");
          playerNames.classList.remove("active");
          endWrapper.classList.remove("active");
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
    document.querySelector(".end-wrapper").classList.add("end");
    document.querySelector(".results-wrapper").classList.add("end");
    document.querySelector(".baskets-dashboard").classList.add("end");
    document.querySelector(".tournament-winner").classList.add("end");
    document.querySelector(".tournament-winner").classList.add("end");
    document.querySelector(".player-names").classList.add("active");
    showResults();
    showWinnerAnimation();
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
      setTournamentStart(false);
    }, 1000);
  };

  return (
    <>
      {!isTournamentStarted ? (
        <Redirect />
      ) : (
        <>
          {players.length > 0 ? (
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
              <Wrapper>
                <MainDashboard className={"baskets-dashboard"}>
                  <PlayerBasketWrap>
                    <PlayerBasket>
                      <Title small>Team {players[0].toUpperCase()}</Title>
                      <TeamsTable playerBasket column>
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
                    </PlayerBasket>
                    {(teamsInBasket.length === 0 && matchTeams.length) === 0 ? (
                      <Title className={"choose-team"}>Wybierz drużynę</Title>
                    ) : null}
                  </PlayerBasketWrap>
                  {teamsInBasket.length === 0 ? null : <Basket />}

                  {tournament.length >= 0 && matchTeams.length > 0 ? (
                    <MatchResults />
                  ) : null}
                  <PlayerBasketWrap>
                    <PlayerBasket>
                      <Title small>Team {players[1].toUpperCase()}</Title>
                      <TeamsTable playerBasket column>
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
                    </PlayerBasket>
                    {matchTeams.length === 1 ? (
                      <Title className={"choose-team"}>Wybierz drużynę</Title>
                    ) : null}
                  </PlayerBasketWrap>
                </MainDashboard>
                <ButtonsWrapper>
                  {teamsInBasket.length === 0 ? null : <DrawingButtons />}
                  {playerTwoTeams.length > 0 && tournament.length > 0 ? (
                    <StyledButton onClick={endTournament}>
                      Zakończ turniej
                    </StyledButton>
                  ) : null}
                </ButtonsWrapper>
                {tournament.length > 0 ? (
                  <EndWrapper className={"end-wrapper"}>
                    <ScoresTable />
                    {isTournamentEnd ? (
                      <EndButton onClick={closeTournament}>Koniec</EndButton>
                    ) : null}
                  </EndWrapper>
                ) : null}
              </Wrapper>
            </Background>
          ) : null}
        </>
      )}
    </>
  );
};

export default TournamentTemplate;
