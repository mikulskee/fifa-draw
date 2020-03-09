import React, { useContext } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { TeamsContext } from "../contexts/TeamsContext";
import { PlayersContext } from "../contexts/PlayersContext";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import ConfirmButtons from "../components/ConfirmButtons";
import TeamsTable from "../components/TeamsTable";
import { ScoresContext } from "../contexts/ScoresContext";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  .dashboard {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .ul-wrapper {
      min-height: 4vw;
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
    }
  }
`;
const AmountOfTeams = styled(Title)`
  padding: 10px 0;
  position: relative;
  transform: translate(0);
  left: 0;
`;

const StyledTitle = styled(Title)`
  position: static;
  text-align: center;
  margin: 20px auto 10px;
  left: auto;
  transform: translate(0);
  ::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 350%;
    height: 2px;
    background-color: white;
    display: block;
    margin: 10px auto;
  }
`;

const ManageButtons = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 340px;

  button {
    font-size: 12px;
    height: auto;
    min-height: 30px;
    padding: 5px 15px;
    margin: 0 5px;
    @media only screen and (min-width: 1024px) {
      height: auto;
    }
  }
`;

const ChooseTeams = props => {
  const {
    teams,
    setTeamSelected,
    teamsInBasket,
    setTeamsInBasket,
    addAllTeamsToBasket
  } = useContext(TeamsContext);

  const { unsubmitNewPlayersForm, clearPlayers } = useContext(PlayersContext);
  const { setTournamentStart } = useContext(ScoresContext);

  const handleConfirm = () => {
    if (teamsInBasket.length > 0) {
      if (teamsInBasket.length % 2 !== 0) {
        alert("Wybierz parzystą liczbę drużyn!");
        return;
      } else if (teamsInBasket.length % 2 === 0) {
        props.history.push("/tournament");
        setTournamentStart(true);
      }
    } else alert("Wybierz drużyny!");
    return;
  };

  const goBackFunction = () => {
    unsubmitNewPlayersForm();
    clearPlayers();
  };

  const handleTeamClick = e => {
    e.target.parentNode.classList.toggle("selected");
    setTeamSelected(e.target.alt);
  };

  const addAllToBasket = () => {
    const teams = window.document.querySelectorAll(".team-in-basket");
    teams.forEach(team => team.classList.add("selected"));
    addAllTeamsToBasket();
  };
  const deleteAllFromBasket = () => {
    const teams = window.document.querySelectorAll(".team-in-basket");
    teams.forEach(team => team.classList.remove("selected"));
    setTeamsInBasket([]);
  };

  return (
    <Wrapper>
      <div className={"dashboard"}>
        <StyledTitle>Wybierz drużyny :</StyledTitle>
        <div className="ul-wrapper">
          <TeamsTable newcup>
            {teams.map(team => (
              <li key={team.id} onClick={handleTeamClick}>
                <div className={"team-in-basket"}>
                  <img src={team.img} alt={team.team}></img>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
              </li>
            ))}
          </TeamsTable>
        </div>

        <AmountOfTeams small>
          Ilość wybranych drużyn: {teamsInBasket.length}
        </AmountOfTeams>
        <ManageButtons>
          <Button small onClick={addAllToBasket}>
            Dodaj wszystkie do koszyka
          </Button>
          <Button small onClick={deleteAllFromBasket}>
            Usuń zanaczenie
          </Button>
        </ManageButtons>
      </div>

      <ConfirmButtons
        textButton={"Utwórz turniej"}
        goBackFunction={goBackFunction}
        handleConfirm={handleConfirm}
      />
    </Wrapper>
  );
};

export default withRouter(ChooseTeams);
