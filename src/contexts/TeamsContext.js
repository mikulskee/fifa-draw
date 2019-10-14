import React, { createContext, useState } from "react";
import arsenal from "../images/arsenal.png";
import atletico from "../images/atletico.png";
import barca from "../images/barca.png";
import bayer from "../images/bayer.png";
import bayern from "../images/bayern.png";
import bvb from "../images/bvb.png";
import chelsea from "../images/chelsea.png";
import city from "../images/city.png";
import inter from "../images/inter.png";
import juve from "../images/juve.png";
import lipsk from "../images/lipsk.png";
import liverpool from "../images/liverpool.png";
import milan from "../images/milan.png";
import monaco from "../images/monaco.png";
import napoli from "../images/napoli.png";
import psg from "../images/psg.png";
import real from "../images/real.png";
import roma from "../images/roma.png";
import tottenham from "../images/tottenham.png";
import united from "../images/united.png";

export const TeamsContext = createContext();

const TeamsContextProvider = props => {
  const [teams] = useState([
    { id: 0, team: "Arsenal Londyn", img: arsenal },
    { id: 1, team: "Atletico Madryt", img: atletico },
    { id: 2, team: "FC Barcelona", img: barca },
    { id: 3, team: "Bayer Leverkusen", img: bayer },
    { id: 4, team: "Bayern Monachium", img: bayern },
    { id: 5, team: "Borussia Dortmund", img: bvb },
    { id: 6, team: "Chelsea Londyn", img: chelsea },
    { id: 7, team: "Manchester City", img: city },
    { id: 8, team: "Inter Mediolan", img: inter },
    { id: 9, team: "Juventus Turyn", img: juve },
    { id: 10, team: "RB Lipsk", img: lipsk },
    { id: 11, team: "FC Liverpool", img: liverpool },
    { id: 12, team: "AC Milan", img: milan },
    { id: 13, team: "AS Monaco", img: monaco },
    { id: 14, team: "Napoli", img: napoli },
    { id: 15, team: "PSG", img: psg },
    { id: 16, team: "Real Madryt", img: real },
    { id: 17, team: "AS Roma", img: roma },
    { id: 18, team: "Tottenham Hotspur", img: tottenham },
    { id: 19, team: "Manchester United", img: united }
  ]);
  const [teamsInBasket, setTeamsInBasket] = useState([]);
  const [matchTeams, setMatchTeam] = useState([]);

  const deleteTeamsInBasket = () => setTeamsInBasket([]);
  const addAllTeamsToBasket = () => setTeamsInBasket(teams);
  const setTeamSelected = id => {
    let teamToDeleteFromBasket = teamsInBasket.filter(team => team.team === id);
    if (teamToDeleteFromBasket.length > 0) {
      const teamsToAddToBasket = teamsInBasket.filter(
        team => team.team !== teamToDeleteFromBasket[0].team
      );
      setTeamsInBasket(teamsToAddToBasket);
    } else {
      const teamToAddToBasket = teams.filter(team => team.team === id);
      setTeamsInBasket([...teamsInBasket].concat(teamToAddToBasket));
    }
  };
  const setTeam = team => {
    setMatchTeam([...matchTeams].concat(team));
  };

  return (
    <TeamsContext.Provider
      value={{
        teams,
        setTeamSelected,
        teamsInBasket,
        deleteTeamsInBasket,
        addAllTeamsToBasket,
        matchTeams,
        setTeam
      }}
    >
      {props.children}
    </TeamsContext.Provider>
  );
};

export default TeamsContextProvider;
