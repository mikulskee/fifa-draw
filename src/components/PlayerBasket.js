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
    left: 0;
    width: 100%;
    animation: shake 4s 4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
    transform: translate3d(0, 0, 0);
    @keyframes shake {
      7%,
      15% {
        transform: translate3d(-1px, 0, 0);
      }

      8%,
      14% {
        transform: translate3d(2px, 0, 0);
      }

      9%,
      11%,
      13% {
        transform: translate3d(-4px, 0, 0);
      }

      10%,
      12% {
        transform: translate3d(4px, 0, 0);
      }
      16% {
        transform: translate3d(0, 0, 0);
      }
    }
  }
`;
