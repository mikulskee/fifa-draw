import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Confetti from 'react-dom-confetti';
import { Title } from './Title';
import { DrawAnimation } from '../animations/DrawAnimation';

const Wrapper = styled.div`
	opacity: 0;
	display: none;
	z-index: -200;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #121212;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const TeamLogo = styled.div`
	transform: translateY(50%);
	opacity: 0;
`;
const LeagueLogo = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 0%);
	opacity: 0;
`;
const TeamName = styled(Title)`
	position: relative;
	left: 0;
	transform: translateY(100%);
	opacity: 0;
	font-size: 46px;
`;
const GroupName = styled(Title)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) scale(2);
	opacity: 0;
	font-size: 120px !important;
	display: flex;
	width: 200px;
	height: 200px;
	align-items: center;
	justify-content: center;
	border: 10px solid white;
	border-radius: 50%;
`;

const ConfettiWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 50%;
`;

const DrawTeamAnimation = (props) => {
	const { drawTeam } = props;
	const [showConfetti, setShowConfetti] = useState(false);

	const config = {
		angle: 90,
		spread: 360,
		startVelocity: 40,
		elementCount: 70,
		dragFriction: 0.12,
		duration: 3000,
		stagger: 3,
		width: '10px',
		height: '10px',
		perspective: '500px',
		colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
	};

	useEffect(() => {
		if (drawTeam.id) {
			setShowConfetti(false);
			setTimeout(() => {
				setShowConfetti(true);
			}, 3500);
		}
	}, [drawTeam]);

	return (
		<Wrapper className={'drawing-animation-card'}>
			<TeamLogo className={'drawing-animation-card--team-logo'}>
				<img src={drawTeam.img} alt={drawTeam.team}></img>
			</TeamLogo>
			<LeagueLogo className={'drawing-animation-card--league-logo'}>
				<img src={drawTeam.league} alt="league-logo"></img>
			</LeagueLogo>
			<TeamName className={'drawing-animation-card--team-title'}>{drawTeam.team}</TeamName>
			<GroupName className={'drawing-animation-card--group-name'}>{drawTeam.group}</GroupName>
			<ConfettiWrapper>
				<Confetti active={showConfetti} config={config} />
				<Confetti active={showConfetti} config={config} />
			</ConfettiWrapper>
		</Wrapper>
	);
};

export default DrawTeamAnimation;
