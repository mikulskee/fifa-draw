import React, { useContext } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { TeamsContext } from "../contexts/TeamsContext";
import { PlayersContext } from "../contexts/PlayersContext";
import { Title } from "../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import ConfirmButtons from "../components/ConfirmButtons";
import TeamsTable from "../components/TeamsTable";

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

const ChooseTeams = props => {
  const { teams, setTeamSelected } = useContext(TeamsContext);
  const { unsubmitNewPlayersForm, clearPlayers } = useContext(PlayersContext);
  const handleConfirm = () => {
    console.log(props);
    props.history.push("/tournament");
  };

  const goBackFunction = () => {
    unsubmitNewPlayersForm();
    clearPlayers();
  };

  const handleTeamClick = e => {
    e.target.parentNode.classList.toggle("selected");
    setTeamSelected(e.target.alt);
  };

  return (
    <>
      <StyledTitle>Wybierz drużyny :</StyledTitle>
      <TeamsTable>
        {teams.map(team => (
          <li key={team.id} onClick={handleTeamClick}>
            <div>
              <img src={team.img} alt={team.team}></img>
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
          </li>
        ))}
      </TeamsTable>
      <ConfirmButtons
        textButton={"Utwórz turniej"}
        goBackFunction={goBackFunction}
        handleConfirm={handleConfirm}
      />
    </>
  );
};

export default withRouter(ChooseTeams);
