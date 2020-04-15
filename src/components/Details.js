import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Title } from "./Title";
import uuidv1 from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
// import { StatsContext } from "../contexts/StatsContext";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  margin: 15px auto;
  overflow: hidden;
  @media only screen and (min-width: 1024px) {
    height: 80%;
    min-height: 200px;
  }
`;

const StyledTitle = styled(Title)`
  margin: 15px 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  span.player-name {
    width: 40%;
    text-align: right;
  }
  span.player-name:nth-child(3) {
    text-align: left;
  }
  span.vs {
    font-size: 16px;
    width: 10%;
  }
`;

const ResultTitle = styled(Title)`
  padding: 10px 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-bottom: 2px solid white;
  @media only screen and (min-width: 1024px) {
    font-size: 22px;
  }
  .team-name {
    width: 30%;
  }
  .score {
    width: 20%;
  }

  .team-logo {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
      margin: 0 10px 0 0;
      width: 20px;
      @media only screen and (min-width: 1024px) {
        width: 30px;
      }
    }
  }

  .team-logo:nth-of-type(1) {
    justify-content: flex-start;

    img {
      margin: 0 0 0 10px;
    }
  }
`;
const ResultTable = styled.ul`
  width: 100%;
  padding: 0 18%;
  height: 75%;
  margin: 0 auto;
  list-style: none;
  overflow: auto;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 60px;
  color: #d4b726;
  font-size: 26px;
  &::after,
  &::before {
    display: none;
  }

  svg {
    pointer-events: none;
  }
`;

const Details = (props) => {
  // const { stats, setStats } = useContext(StatsContext);
  const { date, playerOne, playerTwo, results } = props;

  const newResults = results.map((item) => (
    <li key={uuidv1()}>
      <ResultTitle relative key={uuidv1()} className={"result-table--result"}>
        <span className="team-name">{item.teams["0"].team}</span>
        <div className="team-logo">
          <img src={item.teams["0"].img} alt={item.teams["0"].team} />
        </div>

        <div className="score">
          <span>{item.result["0"]}</span> : <span>{item.result["1"]}</span>
        </div>
        <div className="team-logo">
          <img src={item.teams["1"].img} alt={item.teams["1"].team} />
        </div>
        <span className="team-name">{item.teams["1"].team}</span>
      </ResultTitle>
    </li>
  ));

  const goBack = () => {
    props.history.push("/stats");
  };

  return (
    <Wrapper>
      <Title small relative>
        {date}
      </Title>
      <StyledTitle relative yellow medium>
        <span className="player-name">{playerOne}</span>
        <span className="vs">vs</span>
        <span className="player-name">{playerTwo}</span>
      </StyledTitle>
      <ResultTable className="result-table">{newResults}</ResultTable>
      <StyledButton onClick={goBack}>
        <FontAwesomeIcon icon={faTimes} />
      </StyledButton>
    </Wrapper>
  );
};

export default withRouter(Details);
