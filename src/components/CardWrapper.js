import React from "react";
import styled from "styled-components";
import StatsTournamentCard from "./StatsTournamentCard";

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
  return (
    <Wrapper>
      <li>
        <StatsTournamentCard />
      </li>
      <li>
        <StatsTournamentCard />
      </li>
      <li>
        <StatsTournamentCard />
      </li>
      <li>
        <StatsTournamentCard />
      </li>
      <li>
        <StatsTournamentCard />
      </li>
      <li>
        <StatsTournamentCard />
      </li>
      <li>
        <StatsTournamentCard />
      </li>
    </Wrapper>
  );
};

export default CardWrapper;
