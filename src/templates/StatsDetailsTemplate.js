import React, { useContext } from "react";

import Background from "../components/Background";
import TopBar from "../components/TopBar";
import { Title } from "../components/Title";
import { StatsContext } from "../contexts/StatsContext";
import Details from "../components/Details";

const StatsDetailsTemplate = (props) => {
  const { stats } = useContext(StatsContext);

  const setValues = () => {
    if (stats.length > 0) {
      const tournamentNumber = [...stats].findIndex(
        (item) => item.key === props.match.params.tournament_id
      );

      const details = [...stats].filter(
        (item) => item.key === props.match.params.tournament_id
      );

      const date = details[0].tournament[0].date;
      const playerOne = details[0].tournament[0].playersNames[0];
      const playerTwo = details[0].tournament[0].playersNames[1];
      const results = details[0].tournament;

      return { tournamentNumber, details, date, playerOne, playerTwo, results };
    } else return;
  };

  return (
    <Background overflow="true">
      <TopBar>
        <Title medium>
          Turniej {stats.length === 0 ? null : setValues().tournamentNumber + 1}
        </Title>
      </TopBar>

      {stats.length === 0 ? (
        <h1>Ładowanie...</h1>
      ) : (
        <Details
          date={setValues().date}
          playerOne={setValues().playerOne}
          playerTwo={setValues().playerTwo}
          results={setValues().results}
        />
      )}
    </Background>
  );
};

export default StatsDetailsTemplate;
