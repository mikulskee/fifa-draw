import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ yellow }) => (yellow ? "#d4b726" : "white")};
  font-size: ${({ small }) => (small ? "18px" : "34px")};
  display: block;
  position: ${({ relative }) => (relative ? "relative" : "absolute")};
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;
