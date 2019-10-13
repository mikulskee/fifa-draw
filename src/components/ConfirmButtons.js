import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/Button";

const Wrapper = styled.div`
  position: fixed;
  bottom: 100px;
  width: 90%;
  font-size: 40px;
  color: #d4b726;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  svg {
    cursor: pointer;
  }
`;

const ConfirmButtons = props => {
  return (
    <Wrapper>
      <FontAwesomeIcon
        icon={faArrowCircleLeft}
        onClick={props.goBackFunction}
      />
      <Button onClick={props.handleConfirm}>{props.textButton}</Button>
    </Wrapper>
  );
};

export default ConfirmButtons;
