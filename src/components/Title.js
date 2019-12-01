import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ yellow }) => (yellow ? "#d4b726" : "white")};
  font-size: ${({ medium }) => (medium ? "26px" : "34px")};
  font-size: ${({ small }) => (small ? "18px" : "26px")};
  display: block;
  position: ${({ relative }) => (relative ? "relative" : "absolute")};
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;
