import React, { useState, useContext } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { PlayersContext } from "../contexts/PlayersContext";
import ConfirmButtons from "../components/ConfirmButtons";

const Input = styled.input`
  &[type="text"] {
    width: 300px;
    height: 40px;
    display: block;
    margin: 20px auto;
    font-size: 22px;
    font-weight: bolder;
    padding: 5px 10px;
    border: none;
    text-align: center;
  }

  &::placeholder {
    font-size: 16px;
    font-weight: lighter;
  }
`;

const Form = styled.form`
  flex-grow: 1;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .inputs {
    height: 40%;
    flex-grow: 4;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const NewPlayersForm = props => {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const { addPlayers, submitNewPlayersForm } = useContext(PlayersContext);

  const goBackFunction = e => {
    e.preventDefault();
    props.history.push("/");
  };

  const checkName = () => {
    if (playerOneName.length > 0 && playerTwoName.length > 0) {
<<<<<<< HEAD
=======
      console.log(playerOneName);
      console.log(playerTwoName);
>>>>>>> 3745bdd6477be73b95e81cabb187d86d9a9dc8b4
      if (playerOneName === playerTwoName) {
        alert("Imiona graczy muszą się różnić!");
        setPlayerOneName("");
        setPlayerTwoName("");
      }
    } else return;
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        addPlayers(playerOneName, playerTwoName);
        setPlayerOneName("");
        setPlayerTwoName("");
        submitNewPlayersForm();
      }}
    >
      <div className="inputs">
        <Input
          value={playerOneName}
          onChange={e => setPlayerOneName(e.target.value)}
          onBlur={checkName}
          type="text"
          placeholder="Imię pierwszego gracza (max 8 znaków)"
          required
          maxLength="8"
        />
        <Input
          value={playerTwoName}
          onChange={e => setPlayerTwoName(e.target.value)}
          onBlur={checkName}
          type="text"
          placeholder="Imię drugiego gracza (max 8 znaków)"
          required
          maxLength="8"
        />
      </div>
      <ConfirmButtons
        goBackFunction={goBackFunction}
        textButton={"Zatwierdź"}
      />
    </Form>
  );
};

export default withRouter(NewPlayersForm);
