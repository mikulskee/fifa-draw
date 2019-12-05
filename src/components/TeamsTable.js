import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  list-style: none;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  ${({ playerBasket }) =>
    playerBasket &&
    css`
      height: 89%;
      overflow: auto;
      align-items: start;
    `}
  ${({ newcup }) =>
    newcup &&
    css`
      flex-wrap: nowrap;
      width: fit-content;
      padding: 0;
      min-height: 65px;
      @media only screen and (min-width: 1024px) {
        width: 80%;
        flex-wrap: wrap;
        padding: 5px 0;
        max-width: 620px;
      }
    `}
    ${({ tournament }) =>
      tournament &&
      css`
        height: 80%;
        overflow-y: auto;
      `}
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
      width: 80%;
      flex-flow: wrap;
      justify-content: space-around;
    `}
  li {
    margin: 10px;
    ${({ column }) =>
      column &&
      css`
        width: 32%;
        margin: 12px 0;
        @media only screen and (min-width: 1024px) {
          width: 33%;
        }
      `}

    div {
      position: relative;
      color: #19ff00;
      &.selected {
        svg {
          opacity: 1;
        }
        img {
          opacity: 0.3;
        }
      }
      svg {
        position: absolute;
        pointer-events: none;
        opacity: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      img {
        position: relative;
        display: block;
        height: 4vw;
        max-height: 60px;
        cursor: pointer;
        margin: 0 auto;
        z-index: 2;
        ${({ playerBasket }) =>
          playerBasket &&
          css`
            height: 5vw;
            @media only screen and (min-width: 1024px) {
              max-height: 50px;
            }
            @media only screen and (min-width: 1336px) {
              max-height: 60px;
            }
          `}

        ${({ tournament }) =>
          tournament &&
          css`
            height: 4vw;
            @media only screen and (min-width: 1024px) {
              height: 3.6vw;
            }
          `}

          ${({ newcup }) =>
            newcup &&
            css`
              height: 7vw;
              @media only screen and (min-width: 1024px) {
                height: 3.6vw;
              }
            `}
      }

      h1 {
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-82%, -50%);
        font-weight: bolder;
        z-index: 1;
        text-align: center;
        opacity: 0.2;
        width: 4.7vw;
        font-size: 6vw;
        @media only screen and (min-width: 1024px) {
          width: 4vw;
          font-size: 5vw;
        }
        @media only screen and (min-width: 1336px) {
          font-size: 66px;
          width: 57px;

        }
      }
    }
  }
`;

const TeamsTable = props => {
  return (
    <Wrapper
      newcup={props.newcup}
      tournament={props.tournament}
      column={props.column}
      playerBasket={props.playerBasket}
    >
      {props.children}
    </Wrapper>
  );
};

export default TeamsTable;
