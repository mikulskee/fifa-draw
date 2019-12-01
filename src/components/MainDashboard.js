import styled from "styled-components";

export const MainDashboard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  margin: 20px auto;
  width: 95%;
  flex-grow: 2;
  max-height: 600px;

  &.end {
    display: none;
  }
`;
