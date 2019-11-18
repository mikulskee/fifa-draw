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
  width: 70%;
  height: 70%;
  margin: 40px auto;
`;

const StyledTitle = styled(Title)`
  margin: 20px 0 20px;
  font-size: 46px;
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
  font-size: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-bottom: 2px solid white;
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
    img {
      margin: 0 20px;
      width: 40px;
    }
  }
`;
const ResultTable = styled.div`
  margin-top: 40px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 125px;
  right: 60px;
  color: #d4b726;
  &::after,
  &::before {
    display: none;
  }

  svg {
    pointer-events: none;
  }
`;

const Details = props => {
  // const { stats, setStats } = useContext(StatsContext);
  const { date, playerOne, playerTwo, results } = props;

  const newResults = results.map(item => (
    <ResultTitle relative key={uuidv1()}>
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
  ));

  const goBack = () => {
    props.history.push("/stats");
  };
  // const deleteTournament = () => {
  //   console.log(stats);
  //   const id = props.match.params.tournament_id;

  //   const newStats = [...stats].filter(item => item.key !== id);
  //   props.history.push("/stats");

  //   setStats(newStats);
  // };
  return (
    <Wrapper>
      <Title relative>{date}</Title>
      <StyledTitle relative yellow>
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
