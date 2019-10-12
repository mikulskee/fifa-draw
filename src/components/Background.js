import React from "react";
import styled, { css } from "styled-components";
import mainBg from "../images/main-bg.png";
import statsBg from "../images/stats-bg.png";
import newCupBg from "../images/newcup-bg.png";
import tournamentBg from "../images/tournament-bg.png";

const Wrapper = styled.div`
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    `}
  position: fixed;
  height: 100vh;
  width: 100vw;

  ${({ main }) =>
    main &&
    css`
      background-image: url(${mainBg});
    `}
  ${({ stats }) =>
    stats &&
    css`
      background-image: url(${statsBg});
    `}
  ${({ newcup }) =>
    newcup &&
    css`
      background-image: url(${newCupBg});
    `}
  ${({ tournament }) =>
    tournament &&
    css`
      background-image: url(${tournamentBg});
    `}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Background = props => {
  return (
    <Wrapper
      newcup={props.newcup}
      main={props.main}
      stats={props.stats}
      tournament={props.tournament}
      flex={props.flex}
    >
      {props.children}
    </Wrapper>
  );
};

export default Background;
