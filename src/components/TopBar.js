import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 85%;
  background-color: #043c56;
  color: white;
  border-radius: 10px;
  margin: 10px auto 0;
  padding: 5px 0;
`;

const TopBar = props => {
  return (
    <Wrapper>
      <Logo small={"small"} />
      {props.children}
    </Wrapper>
  );
};

export default TopBar;
