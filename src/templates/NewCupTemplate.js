import React, { useContext, useEffect } from "react";
import Background from "../components/Background";
import NewPlayersForm from "../components/NewPlayersForm";
import TopBar from "../components/TopBar";
import { Title } from "../components/Title";
import { PlayersContext } from "../contexts/PlayersContext";
import { TeamsContext } from "../contexts/TeamsContext";
import ChooseTeams from "../components/ChooseTeams";

const NewCupTemplate = () => {
  const { isNewPlayersSubmited, setPlayers, setSubmitPlayers } = useContext(
    PlayersContext
  );
  const { setTeamsInBasket } = useContext(TeamsContext);
  useEffect(() => {
    setTeamsInBasket([]);
    setPlayers([]);
    setSubmitPlayers(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background flex className="new-cup">
      <TopBar>
        <Title>Nowy Turniej</Title>
      </TopBar>
      {isNewPlayersSubmited ? <ChooseTeams /> : <NewPlayersForm />}
    </Background>
  );
};

export default NewCupTemplate;
