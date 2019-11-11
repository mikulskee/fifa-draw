import React from "react";
import styled from "styled-components";
import Background from "../components/Background";
import TopBar from "../components/TopBar";
import { Title } from "../components/Title";
import CardWrapper from "../components/CardWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/Button";

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: #d4b726;

  svg {
    pointer-events: none;
  }
  &::before,
  &::after {
    display: none;
  }
`;

const StatsTemplate = props => {
  const goBack = () => {
    props.history.push("/");
  };
  return (
    <Background stats>
      <TopBar>
        <Title>Statystyki</Title>
      </TopBar>
      <CardWrapper />
      <StyledButton onClick={goBack}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </StyledButton>
    </Background>
  );
};

export default StatsTemplate;
