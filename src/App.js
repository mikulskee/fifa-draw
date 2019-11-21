import React from "react";
import Media from "react-media";
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
import MobileSizeWarning from "./components/MobileSizeWarning";

const App = () => {
  return (
    <PlayersContextProvider>
      <TeamsContextProvider>
        <ScoresContextProvider>
          <StatsContextProvider>
            <BrowserRouter>
              <Media
                query="(max-width: 1023px)"
                render={() => <MobileSizeWarning />}
              />
              <Media
                query="(min-width: 1024px)"
                render={() => (
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
                              timeout={{ enter: 400, exit: 400 }}
                            >
                              <Switch location={location}>
                                <Route
                                  path="/"
                                  exact
                                  component={MainTemplate}
                                />
                                <Route
                                  path="/newcup"
                                  component={NewCupTemplate}
                                />
                                <Route
                                  path="/stats/:tournament_id"
                                  component={StatsDetailsTemplate}
                                />
                                <Route
                                  path="/stats"
                                  component={StatsTemplate}
                                />
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
                )}
              />
            </BrowserRouter>
          </StatsContextProvider>
        </ScoresContextProvider>
      </TeamsContextProvider>
    </PlayersContextProvider>
  );
};

export default App;
