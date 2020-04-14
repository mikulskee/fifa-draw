import React, { useContext, useState, useEffect } from "react";
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

const Radio = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;

  div {
    margin: 0 10px;
    color: white;
    input {
      margin: 0 5px;
    }
  }
`;

const ChooseTeams = (props) => {
  const {
    teams,
    setTeamSelected,
    teamsInBasket,
    removeAllTeamsFromBasket,
    addAllTeamsToBasket,
  } = useContext(TeamsContext);

  const { unsubmitNewPlayersForm, clearPlayers } = useContext(PlayersContext);
  const { setTournamentStart } = useContext(ScoresContext);
  const [radioValues, setRadioValues] = useState({
    option1: true,
    option2: false,
    option3: false,
  });

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

  const handleTeamClick = (e) => {
    setTeamSelected(e.target.alt);
  };

  const addAllToBasket = () => {
    addAllTeamsToBasket();
  };
  const deleteAllFromBasket = () => {
    removeAllTeamsFromBasket();
  };

  const handleRadioChange = (e) => {
    console.log(e.target.value);

    switch (e.target.value) {
      case "option1":
        setRadioValues({
          option1: true,
          option2: false,
          option3: false,
        });
        break;
      case "option2":
        setRadioValues({
          option1: false,
          option2: true,
          option3: false,
        });
        break;
      case "option3":
        setRadioValues({
          option1: false,
          option2: false,
          option3: true,
        });
        break;

      default:
        return;
    }
  };

  const teamsInTeamsTable = () => {
    let teamsInTable = teams;

    if (radioValues.option2) {
      teamsInTable = teamsInTable.filter((team) => team.class === "club");
    } else if (radioValues.option3) {
      teamsInTable = teamsInTable.filter((team) => team.class === "country");
    }

    teamsInTable = teamsInTable.map((team) => (
      <li key={team.id} onClick={handleTeamClick}>
        <div className={`team-in-basket ${team.selected}`}>
          <img src={team.img} alt={team.team} className={team.class}></img>
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
      </li>
    ));

    return teamsInTable;
  };

  return (
    <Wrapper>
      <div className={"dashboard"}>
        <StyledTitle>Wybierz drużyny :</StyledTitle>
        <div className="ul-wrapper">
          <TeamsTable newcup>{teamsInTeamsTable()}</TeamsTable>
        </div>
        <Radio>
          <div>
            <input
              type="radio"
              id="all"
              name="teams"
              value="option1"
              checked={radioValues.option1}
              onChange={handleRadioChange}
            />
            <label htmlFor="all">Wszystkie</label>
          </div>

          <div>
            <input
              type="radio"
              id="clubs"
              name="teams"
              value="option2"
              checked={radioValues.option2}
              onChange={handleRadioChange}
            />
            <label htmlFor="clubs">Kluby</label>
          </div>

          <div>
            <input
              type="radio"
              id="countries"
              name="teams"
              value="option3"
              checked={radioValues.option3}
              onChange={handleRadioChange}
            />
            <label htmlFor="countries">Reprezentacje</label>
          </div>
        </Radio>

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
