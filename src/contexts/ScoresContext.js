import React, { createContext, useState } from "react";

export const ScoresContext = createContext();

const ScoresContextProvider = props => {
  // const [tournaments, setTournament] = useState([]);

  const [tournament, setTournament] = useState([]);

  const addMatchResult = (result, playersNames, teams, win) => {
    setTournament([...tournament, { win, result, playersNames, teams }]);
  };

  // const addTournament = (time, players, scores) => {
  //   setTournament([...tournaments, {time, players, scores}])
  // }
  return (
    <ScoresContext.Provider value={{ addMatchResult, tournament }}>
      {props.children}
    </ScoresContext.Provider>
  );
};

export default ScoresContextProvider;
