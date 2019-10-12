import React, { createContext, useState } from "react";

export const PlayersContext = createContext();

const PlayersContextProvider = props => {
  const [players, setPlayers] = useState([]);
  const [isNewPlayersSubmited, setSubmitPlayers] = useState(false);

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
        clearPlayers
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
};

export default PlayersContextProvider;
