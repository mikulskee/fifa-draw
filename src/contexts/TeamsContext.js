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
import argentina from "../images/argentina.jpg";
import belgium from "../images/belgium.jpg";
import brazil from "../images/brazil.jpg";
import england from "../images/england.jpg";
import france from "../images/france.jpg";
import germany from "../images/germany.jpg";
import italy from "../images/italy.jpg";
import netherlands from "../images/netherlands.jpg";
import poland from "../images/poland.jpg";
import portugal from "../images/portugal.jpg";
import spain from "../images/spain.jpg";
import uruguay from "../images/uruguay.jpg";

export const TeamsContext = createContext();

const TeamsContextProvider = (props) => {
  const [teams, setTeams] = useState([
    { id: 0, team: "Arsenal Londyn", img: arsenal, class: "club" },
    { id: 1, team: "Atletico Madryt", img: atletico, class: "club" },
    { id: 2, team: "FC Barcelona", img: barca, class: "club" },
    { id: 3, team: "Bayer Leverkusen", img: bayer, class: "club" },
    { id: 4, team: "Bayern Monachium", img: bayern, class: "club" },
    { id: 5, team: "Borussia Dortmund", img: bvb, class: "club" },
    { id: 6, team: "Chelsea Londyn", img: chelsea, class: "club" },
    { id: 7, team: "Manchester City", img: city, class: "club" },
    { id: 8, team: "Inter Mediolan", img: inter, class: "club" },
    { id: 9, team: "Juventus Turyn", img: juve, class: "club" },
    { id: 10, team: "RB Lipsk", img: lipsk, class: "club" },
    { id: 11, team: "FC Liverpool", img: liverpool, class: "club" },
    { id: 12, team: "AC Milan", img: milan, class: "club" },
    { id: 13, team: "AS Monaco", img: monaco, class: "club" },
    { id: 14, team: "Napoli", img: napoli, class: "club" },
    { id: 15, team: "PSG", img: psg, class: "club" },
    { id: 16, team: "Real Madryt", img: real, class: "club" },
    { id: 17, team: "AS Roma", img: roma, class: "club" },
    { id: 18, team: "Tottenham Hotspur", img: tottenham, class: "club" },
    { id: 19, team: "Manchester United", img: united, class: "club" },
    { id: 20, team: "Argentyna", img: argentina, class: "country" },
    { id: 21, team: "Belgia", img: belgium, class: "country" },
    { id: 22, team: "Brazylia", img: brazil, class: "country" },
    { id: 23, team: "Anglia", img: england, class: "country" },
    { id: 24, team: "Francja", img: france, class: "country" },
    { id: 25, team: "Niemcy", img: germany, class: "country" },
    { id: 26, team: "Włochy", img: italy, class: "country" },
    { id: 27, team: "Holandia", img: netherlands, class: "country" },
    { id: 28, team: "Polska", img: poland, class: "country" },
    { id: 29, team: "Portugalia", img: portugal, class: "country" },
    { id: 30, team: "Hiszpania", img: spain, class: "country" },
    { id: 31, team: "Urugwaj", img: uruguay, class: "country" },
  ]);
  const [teamsInBasket, setTeamsInBasket] = useState([]);
  const [matchTeams, setMatchTeam] = useState([]);
  const addAllTeamsToBasket = () => {
    teams.map((team) => (team.selected = "selected"));
    setTeamsInBasket(teams);
  };
  const removeAllTeamsFromBasket = () => {
    teams.map((team) => (team.selected = ""));
    setTeamsInBasket([]);
  };
  const setTeamSelected = (id) => {
    let teamToDeleteFromBasket = teamsInBasket.filter(
      (team) => team.team === id
    );
    if (teamToDeleteFromBasket.length > 0) {
      const teamsToAddToBasket = teamsInBasket.filter(
        (team) => team.team !== teamToDeleteFromBasket[0].team
      );
      setTeamsInBasket(teamsToAddToBasket);

      teams.filter(
        (team) => team.id === teamToDeleteFromBasket[0].id
      )[0].selected = "";
    } else {
      const teamToAddToBasket = teams.filter((team) => team.team === id);

      setTeamsInBasket([...teamsInBasket].concat(teamToAddToBasket));

      teams.filter((team) => team.id === teamToAddToBasket[0].id)[0].selected =
        "selected";
    }
  };
  const setTeam = (team) => {
    setMatchTeam([...matchTeams].concat(team));
  };
  const clearScore = () => {
    setMatchTeam([]);
  };

  const resetTeams = () => {
    teams.map((team) => (team.selected = ""));
  };

  return (
    <TeamsContext.Provider
      value={{
        teams,
        setTeamsInBasket,
        setTeamSelected,
        teamsInBasket,
        addAllTeamsToBasket,
        removeAllTeamsFromBasket,
        matchTeams,
        setTeam,
        clearScore,
        resetTeams,
      }}
    >
      {props.children}
    </TeamsContext.Provider>
  );
};

export default TeamsContextProvider;
