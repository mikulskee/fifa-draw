import React from "react";
import Background from "../components/Background";
import TopBar from "../components/TopBar";
import { Title } from "../components/Title";
import CardWrapper from "../components/CardWrapper";

const StatsTemplate = () => {
  return (
    <Background stats>
      <TopBar>
        <Title>Statystyki</Title>
      </TopBar>
      <CardWrapper />
    </Background>
  );
};

export default StatsTemplate;
