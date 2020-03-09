import React, { useContext, useEffect } from "react";
import Background from "../components/Background";
import NewPlayersForm from "../components/NewPlayersForm";
import TopBar from "../components/TopBar";
import { Title } from "../components/Title";
import { PlayersContext } from "../contexts/PlayersContext";
import { TeamsContext } from "../contexts/TeamsContext";
import ChooseTeams from "../components/ChooseTeams";

const NewCupTemplate = () => {
  const { isNewPlayersSubmited } = useContext(PlayersContext);
  useEffect(() => {
    console.log();
  }, []);

  return (
    <Background overflow="overflow" flex className="new-cup">
      <TopBar>
        <Title>Nowy Turniej</Title>
      </TopBar>
      {isNewPlayersSubmited ? <ChooseTeams /> : <NewPlayersForm />}
    </Background>
  );
};

export default NewCupTemplate;
