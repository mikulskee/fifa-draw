import styled from "styled-components";

export const MainDashboard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  margin: 20px auto;
  width: 98%;
  flex-grow: 2;
  max-height: 520px;

  height: 100%;
  @media only screen and (min-width: 1024px) {
    width: 95%;
  }
  &.end {
    display: none;
  }
`;
