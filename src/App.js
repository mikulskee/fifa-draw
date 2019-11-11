import React, { useEffect } from "react";
import MainTemplate from "./templates/MainTemplate";
import NewCupTemplate from "./templates/NewCupTemplate";
import StatsTemplate from "./templates/StatsTemplate";
import TournamentTemplate from "./templates/TournamentTemplate";
import StatsDetailsTemplate from "./templates/StatsDetailsTemplate";
import { BrowserRouter, Route } from "react-router-dom";
import PlayersContextProvider from "./contexts/PlayersContext";
import TeamsContextProvider from "./contexts/TeamsContext";
import ScoresContextProvider from "./contexts/ScoresContext";
import StatsContextProvider from "./contexts/StatsContext";
import Loader from "./components/Loader";

const App = () => {
  useEffect(() => {
    window.addEventListener("load", () => {
      console.log("załadowane");
    });
  });
  return (
    <PlayersContextProvider>
      <TeamsContextProvider>
        <ScoresContextProvider>
          <StatsContextProvider>
            <div className="App">
              <BrowserRouter>
                <Route path="/" exact component={MainTemplate} />
                <Route path="/newcup" component={NewCupTemplate} />
                <Route path="/stats" component={StatsTemplate} />
                <Route
                  path="/stats/:tournament_id"
                  component={StatsDetailsTemplate}
                />
                <Route path="/tournament" component={TournamentTemplate} />
                <Loader />
              </BrowserRouter>
            </div>
          </StatsContextProvider>
        </ScoresContextProvider>
      </TeamsContextProvider>
    </PlayersContextProvider>
  );
};

export default App;
