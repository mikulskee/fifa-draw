import React, { createContext, useState, useContext } from "react";
import { ScoresContext } from "./ScoresContext";
import { UserContext } from "./UserContext";
import uuidv2 from "uuid";
import firebase from "../firebase";

export const StatsContext = createContext();

const ScoresContextProvider = (props) => {
  const { tournament, winner } = useContext(ScoresContext);
  const { user } = useContext(UserContext);
  const [stats, setStats] = useState([]);
  const getStats = (user) => {
    firebase
      .firestore()
      .collection(`stats-${user.uid}`)
      .onSnapshot(
        (snapshot) => {
          const newStats = snapshot.docs.map((doc) => doc.data());
          setStats(newStats);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  const endTournamentAnimation = () => {
    document.querySelector(".results-wrapper").classList.add("end");
    document.querySelector(".baskets-dashboard").classList.add("end");
  };
  const addTournamentToStats = () => {
    endTournamentAnimation();
    firebase.firestore().collection(`stats-${user.uid}`).add({
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
