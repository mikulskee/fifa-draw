import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  height: 40%;
  li {
    margin: 0 10px;
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
      }
    }
  }
`;

const TeamsTable = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default TeamsTable;
