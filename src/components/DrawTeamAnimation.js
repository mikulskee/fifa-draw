import React from "react";
import styled from "styled-components";

import { Title } from "./Title";

const Wrapper = styled.div`
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #121212;
  z-index: -200;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TeamLogo = styled.div`
  transform: translateY(50%);
  opacity: 0;
`;
const TeamName = styled(Title)`
  position: relative;
  left: 0;
  transform: translateY(100%);
  opacity: 0;
  font-size: 46px;
`;

const DrawTeamAnimation = props => {
  const { drawTeam } = props;

  return (
    <Wrapper className={"drawing-animation-card"}>
      <TeamLogo className={"drawing-animation-card--team-logo"}>
        <img src={drawTeam.img} alt={drawTeam.team}></img>
      </TeamLogo>
      <TeamName className={"drawing-animation-card--team-title"}>
        {drawTeam.team}
      </TeamName>
    </Wrapper>
  );
};

export default DrawTeamAnimation;
