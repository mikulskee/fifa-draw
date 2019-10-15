import React from "react";
import MainTemplate from "./templates/MainTemplate";
import NewCupTemplate from "./templates/NewCupTemplate";
import StatsTemplate from "./templates/StatsTemplate";
import TournamentTemplate from "./templates/TournamentTemplate";
import { BrowserRouter, Route } from "react-router-dom";
import PlayersContextProvider from "./contexts/PlayersContext";
import TeamsContextProvider from "./contexts/TeamsContext";
import ScoresContextProvider from "./contexts/ScoresContext";

const App = () => {
  return (
    <PlayersContextProvider>
      <TeamsContextProvider>
        <ScoresContextProvider>
          <div className="App">
            <BrowserRouter>
              <Route path="/" exact component={MainTemplate} />
              <Route path="/newcup" component={NewCupTemplate} />
              <Route path="/stats" component={StatsTemplate} />
              <Route path="/tournament" component={TournamentTemplate} />
            </BrowserRouter>
          </div>
        </ScoresContextProvider>
      </TeamsContextProvider>
    </PlayersContextProvider>
  );
};

export default App;
