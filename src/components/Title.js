import styled from "styled-components";

export const Title = styled.h1`
  color: white;
  font-size: ${({ small }) => (small ? "18px" : "34px")};
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
