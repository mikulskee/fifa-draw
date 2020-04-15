import React, { createContext, useState, useContext } from "react";
import { ScoresContext } from "./ScoresContext";
import uuidv2 from "uuid";
import firebase from "../firebase";

export const StatsContext = createContext();

const ScoresContextProvider = (props) => {
  const { tournament, winner } = useContext(ScoresContext);
  const [stats, setStats] = useState([]);

  // const useStats = () => {
  //   const [stats, setStats] = useState([]);

  //   useEffect(() => {
  //     firebase
  //       .firestore()
  //       .collection("stats")
  //       .onSnapshot((snapshot) => {
  //         const newStats = snapshot.docs.map((doc) => doc.data());
  //         setStats(newStats);
  //       });
  //   }, []);

  //   return [stats, setStats];
  // };

  // const [stats, setStats] = useStats();

  const getStats = () => {
    firebase
      .firestore()
      .collection("stats")
      .onSnapshot((snapshot) => {
        const newStats = snapshot.docs.map((doc) => doc.data());
        setStats(newStats);
      });
  };

  const endTournamentAnimation = () => {
    document.querySelector(".results-wrapper").classList.add("end");
    document.querySelector(".baskets-dashboard").classList.add("end");
  };
  const addTournamentToStats = () => {
    endTournamentAnimation();
    firebase.firestore().collection("stats").add({
      winner,
      key: uuidv2(),
      tournament,
      timestamp: new Date().getTime(),
    });
  };
  return (
    <StatsContext.Provider
      value={{ stats, addTournamentToStats, setStats, getStats }}
    >
      {props.children}
    </StatsContext.Provider>
  );
};

export default ScoresContextProvider;
