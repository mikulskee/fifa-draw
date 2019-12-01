import React, { useContext } from "react";

import Background from "../components/Background";
import TopBar from "../components/TopBar";
import { Title } from "../components/Title";
import { StatsContext } from "../contexts/StatsContext";
import Details from "../components/Details";

const StatsDetailsTemplate = props => {
  const { stats } = useContext(StatsContext);

  const tournamentNumber = [...stats].findIndex(
    item => item.key === props.match.params.tournament_id
  );

  const details = [...stats].filter(
    item => item.key === props.match.params.tournament_id
  );
  const date = details[0]["0"].date;
  const playerOne = details[0]["0"].playersNames["0"];
  const playerTwo = details[0]["0"].playersNames["1"];
  const detailsArray = Object.keys(details["0"]).map(key => details["0"][key]);
  const results = detailsArray.filter(item => item.result);

  return (
    <Background overflow>
      <TopBar>
        <Title medium>Turniej {tournamentNumber + 1}</Title>
      </TopBar>
      <Details
        date={date}
        playerOne={playerOne}
        playerTwo={playerTwo}
        results={results}
      />
    </Background>
  );
};

export default StatsDetailsTemplate;
