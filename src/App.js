import React, { useEffect } from 'react';
import Media from 'react-media';
import MainTemplate from './templates/MainTemplate';
import NewCupTemplate from './templates/NewCupTemplate';
import StatsTemplate from './templates/StatsTemplate';
import TournamentTemplate from './templates/TournamentTemplate';
import StatsDetailsTemplate from './templates/StatsDetailsTemplate';
import AboutTemplate from './templates/AboutTemplate';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PlayersContextProvider from './contexts/PlayersContext';
import TeamsContextProvider from './contexts/TeamsContext';
import ScoresContextProvider from './contexts/ScoresContext';
import StatsContextProvider from './contexts/StatsContext';
import UserContextProvider from './contexts/UserContext';
import Loader from './components/Loader';
import { TransitionGroup, Transition } from 'react-transition-group';
import { play, exit } from './animations/index';
import MobileSizeWarning from './components/MobileSizeWarning';
import PlayerNamesContextProvider from './contexts/PlayersNamesContext';

const App = () => {
	useEffect(() => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		window.addEventListener('resize', () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
		window.addEventListener('orientationchange', function () {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
	});
	return (
		<UserContextProvider>
			<PlayersContextProvider>
				<TeamsContextProvider>
					<ScoresContextProvider>
						<StatsContextProvider>
							<PlayerNamesContextProvider>
								<BrowserRouter basename={process.env.PUBLIC_URL}>
									<Media query="(orientation: portrait)" render={() => <MobileSizeWarning />} />
									<Media
										query="(orientation: landscape)"
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
																	onEnter={(node) => play(node, pathname)}
																	onExit={(node) => exit(node, pathname)}
																	timeout={{ enter: 400, exit: 400 }}
																>
																	<Switch location={location}>
																		<Route path="/" exact component={MainTemplate} />
																		<Route path="/newcup" component={NewCupTemplate} />
																		<Route
																			path="/stats/:tournament_id"
																			component={StatsDetailsTemplate}
																		/>
																		<Route path="/stats" component={StatsTemplate} />
																		<Route path="/tournament" component={TournamentTemplate} />
																		<Route path="/about" component={AboutTemplate} />
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
							</PlayerNamesContextProvider>
						</StatsContextProvider>
					</ScoresContextProvider>
				</TeamsContextProvider>
			</PlayersContextProvider>
		</UserContextProvider>
	);
};

export default App;
