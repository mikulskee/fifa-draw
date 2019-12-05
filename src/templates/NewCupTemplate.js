import React, { useContext } from "react";
import Background from "../components/Background";
import NewPlayersForm from "../components/NewPlayersForm";
import TopBar from "../components/TopBar";
import { Title } from "../components/Title";
import { PlayersContext } from "../contexts/PlayersContext";
import ChooseTeams from "../components/ChooseTeams";

const NewCupTemplate = () => {
  const { isNewPlayersSubmited } = useContext(PlayersContext);

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
