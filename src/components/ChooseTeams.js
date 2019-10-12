import React, { useContext } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { TeamsContext } from "../contexts/TeamsContext";
import { PlayersContext } from "../contexts/PlayersContext";
import { Title } from "../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import ConfirmButtons from "../components/ConfirmButtons";

const TeamsTable = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  height: 40%;
  li {
    margin: 0 10px;
    div {
      position: relative;
      color: #19ff00;
      &.selected {
        svg {
          opacity: 1;
        }
        img {
          opacity: 0.3;
        }
      }
      svg {
        position: absolute;
        pointer-events: none;
        opacity: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      img {
        display: block;
        height: 60px;
        cursor: pointer;
      }
    }
  }
`;

const StyledTitle = styled(Title)`
  position: relative;
  text-align: center;
  margin: 20px 0;
  font-size: 44px;
  ::after {
    content: "";
    width: 40%;
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
