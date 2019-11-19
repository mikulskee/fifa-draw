import React, { createContext, useState, useContext, useEffect } from "react";
import { ScoresContext } from "./ScoresContext";
import uuidv2 from "uuid";

export const StatsContext = createContext();

const ScoresContextProvider = props => {
  const { tournament, winner } = useContext(ScoresContext);

  const [stats, setStats] = useState(() => {
    const localData = localStorage.getItem("stats");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);

  const endTournamentAnimation = () => {
    document.querySelector(".results-wrapper").classList.add("end");
    document.querySelector(".baskets-dashboard").classList.add("end");
  };
  const addTournamentToStats = () => {
    endTournamentAnimation();
    setStats([
      ...stats,
      Object.assign({}, { winner }, { key: uuidv2() }, tournament)
    ]);
  };
  return (
    <StatsContext.Provider value={{ stats, addTournamentToStats, setStats }}>
      {props.children}
    </StatsContext.Provider>
  );
};

export default ScoresContextProvider;
