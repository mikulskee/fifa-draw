import React, { createContext, useState, useContext } from "react";
import { ScoresContext } from "./ScoresContext";

export const StatsContext = createContext();

const ScoresContextProvider = props => {
  const { tournament } = useContext(ScoresContext);
  const [stats, setStats] = useState([]);
  const endTournamentAnimation = () => {
    document.querySelector(".results-wrapper").classList.add("end");
    document.querySelector(".players-baskets").classList.add("end");
  };
  const addTournamentToStats = () => {
    endTournamentAnimation();
    setStats([...stats, Object.assign({}, tournament)]);
  };
  return (
    <StatsContext.Provider value={{ stats, addTournamentToStats }}>
      {props.children}
    </StatsContext.Provider>
  );
};

export default ScoresContextProvider;
