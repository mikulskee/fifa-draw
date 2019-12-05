import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/Button";

const Wrapper = styled.div`
  width: 90%;
  font-size: 36px;
  color: #d4b726;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  @media only screen and (min-width: 1024px) {
    margin: 10px auto 20px;
  }

  svg {
    pointer-events: none;
  }
`;
const StyledButton = styled(Button)`
  color: #d4b726;

  font-size: 28px;

  svg {
    pointer-events: none;
  }
  &::before,
  &::after {
    display: none;
  }
`;
const ConfirmButtons = props => {
  return (
    <Wrapper>
      <StyledButton onClick={props.goBackFunction}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </StyledButton>

      <Button onClick={props.handleConfirm}>{props.textButton}</Button>
    </Wrapper>
  );
};

export default ConfirmButtons;
