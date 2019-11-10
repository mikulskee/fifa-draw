import React, { createContext, useState } from "react";

export const PlayersContext = createContext();

const PlayersContextProvider = props => {
  const [players, setPlayers] = useState(["konstanty", "ziemowit"]);
  const [playerOneTeams, setPlayerOneTeams] = useState([]);
  const [playerTwoTeams, setPlayerTwoTeams] = useState([]);
  const [isNewPlayersSubmited, setSubmitPlayers] = useState(true);

  const addTeamForPlayerOne = team =>
    setPlayerOneTeams([...playerOneTeams].concat(team));
  const addTeamForPlayerTwo = team =>
    setPlayerTwoTeams([...playerTwoTeams].concat(team));

  const deletePlayerOneTeam = teamToDelete => {
    const team = playerOneTeams.filter(
      team => team.team !== teamToDelete[0].team
    );
    setPlayerOneTeams(team);
  };
  const deletePlayerTwoTeam = teamToDelete => {
    const team = playerTwoTeams.filter(
      team => team.team !== teamToDelete[0].team
    );
    setPlayerTwoTeams(team);
  };

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
        setPlayers,
        setSubmitPlayers,
        submitNewPlayersForm,
        unsubmitNewPlayersForm,
        isNewPlayersSubmited,
        clearPlayers,
        playerOneTeams,
        playerTwoTeams,
        addTeamForPlayerOne,
        addTeamForPlayerTwo,
        deletePlayerOneTeam,
        deletePlayerTwoTeam,
        setPlayerOneTeams,
        setPlayerTwoTeams
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
};

export default PlayersContextProvider;
