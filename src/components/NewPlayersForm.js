import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { PlayersContext } from '../contexts/PlayersContext';
import ConfirmButtons from '../components/ConfirmButtons';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PlayerNamesContext } from '../contexts/PlayersNamesContext';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const Input = styled.input`
	&[type='text'] {
		width: 300px;
		height: 40px;
		display: block;
		margin: 20px auto;
		font-size: 22px;
		font-weight: bolder;
		padding: 5px 10px;
		border: none;
		text-align: center;
	}

	&::placeholder {
		font-size: 16px;
		font-weight: lighter;
	}
`;

const Form = styled.form`
	height: 100%;
	width: 100%;
	min-height: 200px;
	padding: 0 10%;
	overflow-y: auto;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	.inputs {
		height: 40%;
		flex-grow: 4;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.MuiInputLabel-root,
	.MuiInputBase-input {
		color: #ffffff8a;
		font-weight: 700;
		font-family: 'Big Shoulders Display', cursive;
	}
	.MuiSelect-icon,
	.MuiFormLabel-root.Mui-focused {
		color: #ffffff8a;
	}
	.MuiSelect-select.MuiSelect-select {
		width: 200px;
	}
	.MuiSelect-nativeInput {
		width: 200px;
	}
`;
const NewPlayersForm = (props) => {
	const [playerOneName, setPlayerOneName] = useState('');
	const [playerTwoName, setPlayerTwoName] = useState('');
	const [nameToAdd, setNameToAdd] = useState('');
	const { addPlayers, submitNewPlayersForm } = useContext(PlayersContext);
	const { playerNames, addNameToBase } = useContext(PlayerNamesContext);

	const goBackFunction = (e) => {
		e.preventDefault();
		props.history.push('/');
	};

	const checkName = () => {
		if (playerOneName.length > 0 && playerTwoName.length > 0) {
			if (playerOneName === playerTwoName) {
				alert('Imiona graczy muszą się różnić!');
				setPlayerOneName('');
				setPlayerTwoName('');
			}
		} else return;
	};

	const handleChangePlayerOneName = (e) => {
		setPlayerOneName(e.target.value);
	};
	const handleChangePlayerTwoName = (e) => {
		setPlayerTwoName(e.target.value);
	};

	const handleAddNameToBase = (e) => {
		e.preventDefault();

		if (nameToAdd !== '') {
			addNameToBase(nameToAdd);
			setNameToAdd('');
		}
	};

	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();

				if (playerOneName === playerTwoName) {
					alert('Imiona graczy muszą się różnić!');
					setPlayerOneName('');
					setPlayerTwoName('');
				} else {
					addPlayers(playerOneName, playerTwoName);
					setPlayerOneName('');
					setPlayerTwoName('');
					submitNewPlayersForm();
				}
			}}
		>
			<div className="inputs">
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Input
						value={nameToAdd}
						onChange={(e) => setNameToAdd(e.target.value)}
						onBlur={checkName}
						type="text"
						placeholder="Dodaj nowego gracza"
						maxLength="8"
					/>
					<Button style={{ marginLeft: '20px' }} onClick={(e) => handleAddNameToBase(e)}>
						Dodaj
					</Button>
				</div>
				<p style={{ color: 'white', fontSize: '30px', marginTop: '40px', marginBottom: '40px' }}>
					Lub wybierz graczy istniejących
				</p>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<FormControl>
						<InputLabel id="demo-simple-select-label">Gracz nr 1</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={playerOneName}
							onChange={handleChangePlayerOneName}
						>
							{playerNames &&
								playerNames.map((player) => (
									<MenuItem key={player.name} value={player.name}>
										{player.name}
									</MenuItem>
								))}
						</Select>
					</FormControl>
					<p style={{ color: '#d4b726', fontSize: '30px', margin: '0 20px' }}>vs</p>
					<FormControl>
						<InputLabel id="demo-simple-select-label">Gracz nr 2</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={playerTwoName}
							onChange={handleChangePlayerTwoName}
						>
							{playerNames &&
								playerNames.map((player) => (
									<MenuItem key={player.name} value={player.name}>
										{player.name}
									</MenuItem>
								))}
						</Select>
					</FormControl>
				</div>
			</div>
			<ConfirmButtons goBackFunction={goBackFunction} textButton={'Zatwierdź'} />
		</Form>
	);
};

export default withRouter(NewPlayersForm);
