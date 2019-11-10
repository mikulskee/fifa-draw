import React, { createContext, useState } from "react";

export const ScoresContext = createContext();

const ScoresContextProvider = props => {
  const [tournament, setTournament] = useState([]);
  const [winner, setWinner] = useState("");
  const [isTournamentEnd, setTournamentEnd] = useState(false);

  const showWinner = () => {
    const pl1wins = tournament.filter(tour => tour.win === 0).length;
    const pl2wins = tournament.filter(tour => tour.win === 1).length;
    const pl1Name = tournament[0].playersNames["0"];
    const pl2Name = tournament[0].playersNames["1"];

    if (pl1wins > pl2wins) {
      setWinner(pl1Name.toUpperCase());
    } else if (pl1wins < pl2wins) {
      setWinner(pl2Name.toUpperCase());
    } else {
      return;
    }
  };

  const addMatchResult = (date, result, playersNames, teams, win) => {
    setTournament([...tournament, { date, win, result, playersNames, teams }]);
  };
  return (
    <ScoresContext.Provider
      value={{
        addMatchResult,
        tournament,
        setTournament,
        winner,
        showWinner,
        isTournamentEnd,
        setTournamentEnd,
        setWinner
      }}
    >
      {props.children}
    </ScoresContext.Provider>
  );
};

export default ScoresContextProvider;
