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
  width: 90%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  .dashboard {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const AmountOfTeams = styled(Title)`
  padding: 10px 0;
  position: relative;
  transform: translate(0);
  left: 0;
`;

const StyledTitle = styled(Title)`
  position: relative;
  text-align: center;
  margin: 20px auto;

  left: auto;
  transform: translateX(0);
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
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 340px;

  button {
    font-size: 16px;
    height: auto;
    padding: 10px 20px;
    margin: 0 5px;
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
      {/* <WarningWindow /> */}
    </Wrapper>
  );
};

export default withRouter(ChooseTeams);
