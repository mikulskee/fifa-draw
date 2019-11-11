import React, { useContext } from "react";
import styled from "styled-components";
import StatsTournamentCard from "./StatsTournamentCard";
import { StatsContext } from "../contexts/StatsContext";

const Wrapper = styled.ul`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
`;

const CardWrapper = () => {
  const { stats } = useContext(StatsContext);

  const tournaments = stats.map((item, i) => (
    <li key={item.key}>
      <StatsTournamentCard
        tournamentNumber={i + 1}
        date={item[0].date}
        winner={item.winner}
        id={item.key}
      />
    </li>
  ));

  return <Wrapper>{tournaments}</Wrapper>;
};

export default CardWrapper;
