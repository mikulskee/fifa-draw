import React, { createContext, useState } from "react";

export const PlayersContext = createContext();

const PlayersContextProvider = props => {
  const [players, setPlayers] = useState([]);
  const [playerOneTeams, setPlayerOneTeams] = useState([]);
  const [playerTwoTeams, setPlayerTwoTeams] = useState([]);
  const [isNewPlayersSubmited, setSubmitPlayers] = useState(false);

  const addTeamForPlayerOne = team =>
    setPlayerOneTeams([...playerOneTeams].concat(team));
  const addTeamForPlayerTwo = team =>
    setPlayerTwoTeams([...playerTwoTeams].concat(team));

  const submitNewPlayersForm = () => {
    setSubmitPlayers(true);
  };
  const unsubmitNewPlayersForm = () => {
    setSubmitPlayers(false);
  };
  const clearPlayers = () => {
    setPlayers([]);
  };
  const addPlayers = (playerOne, playerTwo) => {
    setPlayers([playerOne, playerTwo]);
  };

  return (
    <PlayersContext.Provider
      value={{
        addPlayers,
        players,
        submitNewPlayersForm,
        unsubmitNewPlayersForm,
        isNewPlayersSubmited,
        clearPlayers,
        playerOneTeams,
        playerTwoTeams,
        addTeamForPlayerOne,
        addTeamForPlayerTwo
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
};

export default PlayersContextProvider;
