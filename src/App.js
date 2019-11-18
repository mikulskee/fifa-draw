import React from "react";
import MainTemplate from "./templates/MainTemplate";
import NewCupTemplate from "./templates/NewCupTemplate";
import StatsTemplate from "./templates/StatsTemplate";
import TournamentTemplate from "./templates/TournamentTemplate";
import StatsDetailsTemplate from "./templates/StatsDetailsTemplate";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PlayersContextProvider from "./contexts/PlayersContext";
import TeamsContextProvider from "./contexts/TeamsContext";
import ScoresContextProvider from "./contexts/ScoresContext";
import StatsContextProvider from "./contexts/StatsContext";
import Loader from "./components/Loader";
import { TransitionGroup, Transition } from "react-transition-group";
import { play, exit } from "./animations/index";

const App = () => {
  return (
    <PlayersContextProvider>
      <TeamsContextProvider>
        <ScoresContextProvider>
          <StatsContextProvider>
            <BrowserRouter>
              <div className="App">
                <Route
                  render={({ location }) => {
                    const { key, pathname } = location;
                    return (
                      <TransitionGroup component={null}>
                        <Transition
                          key={key}
                          appear={true}
                          onEnter={node => play(node, pathname)}
                          onExit={node => exit(node, pathname)}
                          timeout={{ enter: 1200, exit: 3800 }}
                        >
                          <Switch location={location}>
                            <Route path="/" exact component={MainTemplate} />
                            <Route path="/newcup" component={NewCupTemplate} />
                            <Route
                              path="/stats/:tournament_id"
                              component={StatsDetailsTemplate}
                            />
                            <Route path="/stats" component={StatsTemplate} />
                            <Route
                              path="/tournament"
                              component={TournamentTemplate}
                            />
                          </Switch>
                        </Transition>
                      </TransitionGroup>
                    );
                  }}
                />
                <Loader />
              </div>
            </BrowserRouter>
          </StatsContextProvider>
        </ScoresContextProvider>
      </TeamsContextProvider>
    </PlayersContextProvider>
  );
};

export default App;
