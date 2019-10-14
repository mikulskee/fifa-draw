import styled from "styled-components";

export const PlayerBasket = styled.div`
  position: relative;
  width: 370px;
  background-color: #043c56;
  border-radius: 10px;
  padding: 20px 0;
  max-height: 80%;

  h1 {
    position: static;
    text-align: center;
    transform: translateX(0);
  }

  h1.choose-team {
    color: #d4b726;
    position: absolute;
    bottom: -50px;
    transform: translateX(-50%);
  }
`;
