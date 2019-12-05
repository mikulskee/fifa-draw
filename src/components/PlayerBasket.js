import styled from "styled-components";

export const PlayerBasket = styled.div`
  position: relative;
  background-color: #043c56;
  border-radius: 10px;
  padding: 15px 0;
  overflow: hidden;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 1336px) {
    width: 340px;
  }

  h1 {
    position: static;
    text-align: center;
    transform: translateX(0);
  }
`;
