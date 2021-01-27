import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import firebase from '../firebase';

export const PlayerNamesContext = createContext();

const PlayerNamesContextProvider = (props) => {
	const [playerNames, setPlayerNames] = useState([]);

	const { user } = useContext(UserContext);

	const getPlayerNames = () => {
		firebase
			.firestore()
			.collection(`player-names-${user.uid}`)
			.onSnapshot(
				(snapshot) => {
					const newPlayerNames = snapshot.docs.map((doc) => doc.data());

					setPlayerNames(newPlayerNames);
				},
				(err) => {
					console.log(err);
				}
			);
	};

	const addNameToBase = (name) => {
		console.log(name);
		firebase.firestore().collection(`player-names-${user.uid}`).add({
			name,
		});
	};

	useEffect(() => {
		if (user) {
			getPlayerNames();
		}
	}, [user]);

	return (
		<PlayerNamesContext.Provider
			value={{
				playerNames,
				addNameToBase,
			}}
		>
			{props.children}
		</PlayerNamesContext.Provider>
	);
};

export default PlayerNamesContextProvider;
