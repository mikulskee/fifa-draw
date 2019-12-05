import React, { useContext, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/pl";
import { TeamsContext } from "../contexts/TeamsContext";
import { PlayersContext } from "../contexts/PlayersContext";
import { ScoresContext } from "../contexts/ScoresContext";
import { RowFlexWrapper } from "./RowFlexWrapper";
import { Button } from "./Button";
import select from "../images/select.png";

const Wrapper = styled.form`
  align-self: center;
  color: white;
  font-size: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin-top: 30px;
  @media only screen and (min-width: 1024px) {
    padding: 75px 0;
    height: 100%;
    margin-top: 0;
  }

  .score-table {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media only screen and (min-width: 1024px) {
      width: 400px;
    }
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
      margin: 0 5px;
      position: relative;
      z-index: 2;
      width: 9.7vw;
      @media only screen and (min-width: 1024px) {
        height: 100px;
        width: auto;
        margin: 0 20px;
      }
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

const Select = styled.select`
  display: block;
  font-size: 50px;
  background: none;
  border: none;
  border: 2px solid #d4b726;

  font-weight: bolder;
  margin: 0 5px;

  background: url(${select}) no-repeat 11px center;
  background-color: #121212;
  color: white;

  padding: 0 14px 0 5px;

  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  -ms-appearance: none;
  appearance: none;
  .option {
    font-size: 18px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 60px;
    background: url(${select}) no-repeat 18px center;
    background-color: #121212;
    color: white;
  }

  :focus {
    outline: none;
  }
`;

const StyledRowFlexWrapper = styled(RowFlexWrapper)`
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  height: auto;
  padding: 5px 20px;
`;

const MatchResults = () => {
  const { matchTeams, clearScore } = useContext(TeamsContext);
  const { players } = useContext(PlayersContext);
  const { addMatchResult } = useContext(ScoresContext);
  const [playerOneSelect, setPlayerOneSelect] = useState(0);
  const [playerTwoSelect, setPlayerTwoSelect] = useState(0);

  const handleSaveScore = e => {
    e.preventDefault();

    if (playerOneSelect > playerTwoSelect) {
      const win = 0;
      const result = Object.assign(
        {},
        Array.of(playerOneSelect, playerTwoSelect)
      );
      const playersNames = Object.assign({}, players);
      const teams = Object.assign({}, matchTeams);
      const date = moment(new Date())
        .locale("pl")
        .format("lll");

      addMatchResult(date, result, playersNames, teams, win);
      clearScore();
      setPlayerTwoSelect(0);
      setPlayerOneSelect(0);
    } else if (playerOneSelect < playerTwoSelect) {
      const win = 1;
      const result = Object.assign(
        {},
        Array.of(playerOneSelect, playerTwoSelect)
      );
      const playersNames = Object.assign({}, players);
      const teams = Object.assign({}, matchTeams);
      const date = moment(new Date())
        .locale("pl")
        .format("lll");
      addMatchResult(date, result, playersNames, teams, win);
      clearScore();
      setPlayerTwoSelect(0);
      setPlayerOneSelect(0);
    } else if (playerOneSelect === playerTwoSelect) {
      alert(
        "Mecz MUSI zakończyć się rozstrzygnięciem. W razie remisu wpisz wynik z dogrywki lub rzutów karnych."
      );
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
                <Select
                  name="select"
                  id="score"
                  size="10px"
                  onChange={e => setPlayerOneSelect(e.target.value)}
                  value={playerOneSelect}
                >
                  <option className="option" value="0">
                    0
                  </option>
                  <option className="option" value="1">
                    1
                  </option>
                  <option className="option" value="2">
                    2
                  </option>
                  <option className="option" value="3">
                    3
                  </option>
                  <option className="option" value="4">
                    4
                  </option>
                  <option className="option" value="5">
                    5
                  </option>
                  <option className="option" value="6">
                    6
                  </option>
                  <option className="option" value="7">
                    7
                  </option>
                  <option className="option" value="8">
                    8
                  </option>
                  <option className="option" value="9">
                    9
                  </option>
                  <option className="option" value="10">
                    10
                  </option>
                  <option className="option" value="11">
                    11
                  </option>
                  <option className="option" value="12">
                    12
                  </option>
                  <option className="option" value="13">
                    13
                  </option>
                </Select>
              ) : null}
            </>
          ) : null}
        </div>
        <span>:</span>
        <div className="score">
          {matchTeams.length > 1 ? (
            <>
              <Select
                name="select"
                id="score"
                onChange={e => setPlayerTwoSelect(e.target.value)}
                value={playerTwoSelect}
              >
                <option className="option" value="0">
                  0
                </option>
                <option className="option" value="1">
                  1
                </option>
                <option className="option" value="2">
                  2
                </option>
                <option className="option" value="3">
                  3
                </option>
                <option className="option" value="4">
                  4
                </option>
                <option className="option" value="5">
                  5
                </option>
                <option className="option" value="6">
                  6
                </option>
                <option className="option" value="7">
                  7
                </option>
                <option className="option" value="8">
                  8
                </option>
                <option className="option" value="9">
                  9
                </option>
                <option className="option" value="10">
                  10
                </option>
                <option className="option" value="11">
                  11
                </option>
                <option className="option" value="12">
                  12
                </option>
                <option className="option" value="13">
                  13
                </option>
              </Select>
              <img src={matchTeams[1].img} alt="logo" />
            </>
          ) : null}
        </div>
      </div>

      {matchTeams.length > 1 ? (
        <StyledRowFlexWrapper>
          <StyledButton small onClick={handleSaveScore}>
            Zapisz wynik
          </StyledButton>
        </StyledRowFlexWrapper>
      ) : null}
    </Wrapper>
  );
};

export default MatchResults;
