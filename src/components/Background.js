import React from "react";
import styled, { css } from "styled-components";
import mainBg from "../images/main-bg.jpg";
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

  height: 100vh;
  width: 100vw;
  max-width: 1920px;
  max-height: 1080px;
  margin: 0 auto;

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
      className={props.className}
    >
      {props.children}
    </Wrapper>
  );
};

export default Background;
