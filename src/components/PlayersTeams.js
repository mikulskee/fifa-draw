import styled from "styled-components";

export const PlayersTeams = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  margin: 20px auto;
  width: 95%;
  height: 67%;

  &.end {
    display: none;
  }
`;
