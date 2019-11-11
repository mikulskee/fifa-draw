import React, { useContext, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/pl";
import { TeamsContext } from "../contexts/TeamsContext";
import { PlayersContext } from "../contexts/PlayersContext";
import { ScoresContext } from "../contexts/ScoresContext";
import { ColumnFlexWrapper } from "./ColumnFlexWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { RowFlexWrapper } from "./RowFlexWrapper";
import { Button } from "./Button";

const Wrapper = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 60px;

  .score-table {
    display: flex;
    flex-direction: row;
    width: 400px;
    justify-content: center;
    align-items: center;
  }

  span {
    transform: translateY(-15%);
  }

  .score {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 200px;
    justify-content: flex-end;

    img {
      display: block;
      margin: 0 20px;
      height: 100px;
      position: relative;
      z-index: 2;
    }
    h1 {
      font-size: 80px;
      position: absolute;
      opacity: 0.4;
      text-align: center;
      transform: translate(-70px, 0);
    }
  }

  .score:nth-of-type(2) {
    justify-content: flex-start;
    h1 {
      transform: translate(70px, 0);
    }
  }
`;

const Input = styled.input`
  &[type="number"] {
    width: 40px;
    font-size: 60px;
    background: none;
    border: none;
    border: 2px solid #d4b726;
    color: white;
    text-align: center;
    font-weight: bolder;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
    :focus {
      outline: none;
    }
  }
`;

const ChangeScoreButton = styled.button`
  background: none;
  background-color: #d4b726;
  border: none;
  width: 40px;
  color: white;
  font-size: 18px;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: background-color 0.15s linear;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &.pressed {
    background-color: #a68e17;
  }
  &:nth-of-type(2) {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  svg {
    pointer-events: none;
  }
`;

const StyledRowFlexWrapper = styled(RowFlexWrapper)`
  margin-top: 20px;
`;

const MatchResults = () => {
  const { matchTeams, clearScore } = useContext(TeamsContext);
  const { players } = useContext(PlayersContext);
  const { addMatchResult } = useContext(ScoresContext);
  const [playerOneInput, setPlayerOneInput] = useState(0);
  const [playerTwoInput, setPlayerTwoInput] = useState(0);

  const handlePlayerOneScoreButtonUp = e => {
    e.preventDefault();
    setPlayerOneInput(playerOneInput + 1);
  };
  const handlePlayerOneScoreButtonDown = e => {
    e.preventDefault();

    if (playerOneInput === 0) {
      return;
    } else {
      setPlayerOneInput(playerOneInput + -1);
    }
  };
  const handlePlayerTwoScoreButtonUp = e => {
    e.preventDefault();

    setPlayerTwoInput(playerTwoInput + 1);
  };
  const handlePlayerTwoScoreButtonDown = e => {
    e.preventDefault();

    if (playerTwoInput === 0) {
      return;
    } else {
      setPlayerTwoInput(playerTwoInput + -1);
    }
  };

  const handleSaveScore = e => {
    e.preventDefault();

    if (playerOneInput > playerTwoInput) {
      const win = 0;
      const result = Object.assign(
        {},
        Array.of(playerOneInput, playerTwoInput)
      );
      const playersNames = Object.assign({}, players);
      const teams = Object.assign({}, matchTeams);
      const date = moment(new Date())
        .locale("pl")
        .format("lll");

      addMatchResult(date, result, playersNames, teams, win);
      clearScore();
      setPlayerTwoInput(0);
      setPlayerOneInput(0);
    } else if (playerOneInput < playerTwoInput) {
      const win = 1;
      const result = Object.assign(
        {},
        Array.of(playerOneInput, playerTwoInput)
      );
      const playersNames = Object.assign({}, players);
      const teams = Object.assign({}, matchTeams);
      const date = moment(new Date())
        .locale("pl")
        .format("lll");
      addMatchResult(date, result, playersNames, teams, win);
      clearScore();
      setPlayerTwoInput(0);
      setPlayerOneInput(0);
    }
  };

  return (
    <Wrapper className="score-result-form">
      <div className="score-table">
        <div className="score">
          {matchTeams.length > 0 ? (
            <>
              <img src={matchTeams[0].img} alt="logo" />

              {matchTeams.length > 1 ? (
                <ColumnFlexWrapper>
                  <ChangeScoreButton
                    onClick={handlePlayerOneScoreButtonUp}
                    onMouseDown={e => {
                      e.target.classList.add("pressed");
                    }}
                    onMouseUp={e => {
                      e.target.classList.remove("pressed");
                    }}
                  >
                    <FontAwesomeIcon icon={faCaretUp} />
                  </ChangeScoreButton>
                  <Input
                    type="number"
                    value={playerOneInput}
                    onChange={e => setPlayerOneInput(e.target.value)}
                    min={0}
                    max={99}
                  />
                  <ChangeScoreButton
                    onClick={handlePlayerOneScoreButtonDown}
                    onMouseDown={e => {
                      e.target.classList.add("pressed");
                    }}
                    onMouseUp={e => {
                      e.target.classList.remove("pressed");
                    }}
                  >
                    <FontAwesomeIcon icon={faCaretDown} />
                  </ChangeScoreButton>
                </ColumnFlexWrapper>
              ) : null}

              {/* <h1>{matchTeams[0].team}</h1> */}
            </>
          ) : null}
        </div>
        <span>:</span>
        <div className="score">
          {matchTeams.length > 1 ? (
            <>
              <ColumnFlexWrapper>
                <ChangeScoreButton
                  onClick={handlePlayerTwoScoreButtonUp}
                  onMouseDown={e => {
                    e.target.classList.add("pressed");
                  }}
                  onMouseUp={e => {
                    e.target.classList.remove("pressed");
                  }}
                >
                  <FontAwesomeIcon icon={faCaretUp} />
                </ChangeScoreButton>
                <Input
                  type="number"
                  value={playerTwoInput}
                  onChange={e => setPlayerTwoInput(e.target.value)}
                  min={0}
                  max={99}
                />
                <ChangeScoreButton
                  onClick={handlePlayerTwoScoreButtonDown}
                  onMouseDown={e => {
                    e.target.classList.add("pressed");
                  }}
                  onMouseUp={e => {
                    e.target.classList.remove("pressed");
                  }}
                >
                  <FontAwesomeIcon icon={faCaretDown} />
                </ChangeScoreButton>
              </ColumnFlexWrapper>
              <img src={matchTeams[1].img} alt="logo" />
              {/* <h1>{matchTeams[1].team}</h1> */}
            </>
          ) : null}
        </div>
      </div>

      {matchTeams.length > 1 ? (
        <StyledRowFlexWrapper>
          <Button small onClick={handleSaveScore}>
            Zapisz wynik
          </Button>
        </StyledRowFlexWrapper>
      ) : null}
    </Wrapper>
  );
};

export default MatchResults;
