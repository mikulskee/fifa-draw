import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  height: 40%;
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
      flex-wrap: nowrap;
    `}
  li {
    margin: 0 10px;
    ${({ column }) =>
      column &&
      css`
        width: 100%;
        margin: 20px 0;
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
        display: block;
        height: 60px;
        cursor: pointer;
        margin: 0 auto;
      }
    }
  }
`;

const TeamsTable = props => {
  return <Wrapper column={props.column}>{props.children}</Wrapper>;
};

export default TeamsTable;
