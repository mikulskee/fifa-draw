import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ yellow }) => (yellow ? "#d4b726" : "white")};
  font-size: 18px;
  display: block;
  position: ${({ relative }) => (relative ? "relative" : "absolute")};
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  @media only screen and (min-width: 1024px) {
    font-size: ${({ medium }) => (medium ? "26px" : "34px")};
    font-size: ${({ small }) => (small ? "18px" : "26px")};
  }
`;
