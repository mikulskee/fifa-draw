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

const AmountOfTeams = styled(Title)`
  position: fixed;
  bottom: 200px;
`;

const StyledTitle = styled(Title)`
  position: relative;
  text-align: center;
  margin: 20px auto;
  font-size: 44px;
  left: auto;
  transform: translateX(0);
  ::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 250%;
    height: 2px;
    background-color: white;
    display: block;
    margin: 10px auto;
  }
`;

const ManageButtons = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
    <>
      <StyledTitle>Wybierz drużyny :</StyledTitle>
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
      <ManageButtons>
        <Button small onClick={addAllToBasket}>
          Dodaj wszystkie do koszyka
        </Button>
        <Button small onClick={deleteAllFromBasket}>
          Usuń zanaczenie
        </Button>
      </ManageButtons>
      <AmountOfTeams>
        Ilość wybranych drużyn: {teamsInBasket.length}
      </AmountOfTeams>
      <ConfirmButtons
        textButton={"Utwórz turniej"}
        goBackFunction={goBackFunction}
        handleConfirm={handleConfirm}
      />
      {/* <WarningWindow /> */}
    </>
  );
};

export default withRouter(ChooseTeams);
