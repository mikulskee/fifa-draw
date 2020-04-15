import React, { useContext } from "react";
import styled from "styled-components";
import Background from "../components/Background";
import TopBar from "../components/TopBar";
import { Title } from "../components/Title";
import CardWrapper from "../components/CardWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/Button";
import { StatsContext } from "../contexts/StatsContext";

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  left: 40px;
  color: #d4b726;
  font-size: 28px;
  @media only screen and (min-width: 667px) {
    bottom: 40px;
  }

  svg {
    pointer-events: none;
  }
  &::before,
  &::after {
    display: none;
  }
`;

const StyledTitle = styled(Title)`
  margin-top: 20px;
  ::after {
    position: absolute;
    content: "";
    margin-top: 10px;
    display: block;
    width: 110%;
    height: 2px;
    background-color: #fff;
    transform: translateX(-50%);
    left: 50%;
  }
`;

const StatsTemplate = (props) => {
  const { stats } = useContext(StatsContext);

  const goBack = () => {
    props.history.push("/");
  };

  return (
    <Background className="stats">
      <TopBar>
        <Title>Statystyki</Title>
      </TopBar>
      {stats.length === 0 ? (
        <StyledTitle>Brak rozegranych turniejów</StyledTitle>
      ) : (
        <CardWrapper />
      )}

      <StyledButton onClick={goBack}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </StyledButton>
    </Background>
  );
};

export default StatsTemplate;
