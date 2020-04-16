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
import ajax from "../images/ajax.png";
import atalanta from "../images/atalanta.png";
import benfica from "../images/benfica.png";
import lazio from "../images/lazio.png";
import leicester from "../images/leicester.png";
import lyon from "../images/lyon.png";
import marseille from "../images/marseille.png";
import porto from "../images/porto.png";
import schalke from "../images/schalke.png";
import westham from "../images/westham.png";
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
import premiereLeague from "../images/premiereleague.png";
import laliga from "../images/laliga.png";
import bundesliga from "../images/bundesliga.png";
import seriea from "../images/seriea.png";
import ligue1 from "../images/ligue1.png";
import eredivisie from "../images/eredivisie.png";
import liganos from "../images/liganos.png";

export const TeamsContext = createContext();

const TeamsContextProvider = (props) => {
  const [teams] = useState([
    {
      id: 0,
      team: "Arsenal Londyn",
      img: arsenal,
      class: "club",
      league: premiereLeague,
    },
    {
      id: 1,
      team: "Atletico Madryt",
      img: atletico,
      class: "club",
      league: laliga,
    },
    { id: 2, team: "FC Barcelona", img: barca, class: "club", league: laliga },
    {
      id: 3,
      team: "Bayer Leverkusen",
      img: bayer,
      class: "club",
      league: bundesliga,
    },
    {
      id: 4,
      team: "Bayern Monachium",
      img: bayern,
      class: "club",
      league: bundesliga,
    },
    {
      id: 5,
      team: "Borussia Dortmund",
      img: bvb,
      class: "club",
      league: bundesliga,
    },
    {
      id: 6,
      team: "Chelsea Londyn",
      img: chelsea,
      class: "club",
      league: premiereLeague,
    },
    {
      id: 7,
      team: "Manchester City",
      img: city,
      class: "club",
      league: premiereLeague,
    },
    {
      id: 8,
      team: "Inter Mediolan",
      img: inter,
      class: "club",
      league: seriea,
    },
    { id: 9, team: "Juventus Turyn", img: juve, class: "club", league: seriea },
    { id: 10, team: "RB Lipsk", img: lipsk, class: "club", league: bundesliga },
    {
      id: 11,
      team: "FC Liverpool",
      img: liverpool,
      class: "club",
      league: premiereLeague,
    },
    { id: 12, team: "AC Milan", img: milan, class: "club", league: seriea },
    { id: 13, team: "AS Monaco", img: monaco, class: "club", league: ligue1 },
    { id: 14, team: "Napoli", img: napoli, class: "club", league: seriea },
    { id: 15, team: "PSG", img: psg, class: "club", league: ligue1 },
    { id: 16, team: "Real Madryt", img: real, class: "club", league: laliga },
    { id: 17, team: "AS Roma", img: roma, class: "club", league: seriea },
    {
      id: 18,
      team: "Tottenham Hotspur",
      img: tottenham,
      class: "club",
      league: premiereLeague,
    },
    {
      id: 19,
      team: "Manchester United",
      img: united,
      class: "club",
      league: premiereLeague,
    },
    {
      id: 20,
      team: "Ajax Amsterdam",
      img: ajax,
      class: "club",
      league: eredivisie,
    },
    {
      id: 21,
      team: "Atalanta Bergamo",
      img: atalanta,
      class: "club",
      league: seriea,
    },
    {
      id: 22,
      team: "Benfica Lizbona",
      img: benfica,
      class: "club",
      league: liganos,
    },
    { id: 23, team: "Lazio Rzym", img: lazio, class: "club", league: seriea },
    {
      id: 24,
      team: "Leicester",
      img: leicester,
      class: "club",
      league: premiereLeague,
    },
    {
      id: 25,
      team: "Olympique Lyon",
      img: lyon,
      class: "club",
      league: ligue1,
    },
    {
      id: 26,
      team: "Olympique Marseille",
      img: marseille,
      class: "club",
      league: ligue1,
    },
    { id: 27, team: "FC Porto", img: porto, class: "club", league: liganos },
    {
      id: 28,
      team: "Schalke 04 Gelsenkirchen",
      img: schalke,
      class: "club",
      league: bundesliga,
    },
    {
      id: 29,
      team: "West Ham United",
      img: westham,
      class: "club",
      league: premiereLeague,
    },
    { id: 30, team: "Argentyna", img: argentina, class: "country" },
    { id: 31, team: "Belgia", img: belgium, class: "country" },
    { id: 32, team: "Brazylia", img: brazil, class: "country" },
    { id: 33, team: "Anglia", img: england, class: "country" },
    { id: 34, team: "Francja", img: france, class: "country" },
    { id: 35, team: "Niemcy", img: germany, class: "country" },
    { id: 36, team: "Włochy", img: italy, class: "country" },
    { id: 37, team: "Holandia", img: netherlands, class: "country" },
    { id: 38, team: "Polska", img: poland, class: "country" },
    { id: 39, team: "Portugalia", img: portugal, class: "country" },
    { id: 40, team: "Hiszpania", img: spain, class: "country" },
    { id: 41, team: "Urugwaj", img: uruguay, class: "country" },
  ]);
  const [teamsInBasket, setTeamsInBasket] = useState([]);
  const [matchTeams, setMatchTeam] = useState([]);
  const addAllTeamsToBasket = () => {
    const newTeams = [...teams].map((team) => {
      team.selected = "selected";

      return team;
    });
    setTeamsInBasket(newTeams);
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
