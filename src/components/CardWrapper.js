import React, { useContext } from "react";
import styled from "styled-components";
import StatsTournamentCard from "./StatsTournamentCard";
import { StatsContext } from "../contexts/StatsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.ul`
  height: 58%;
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
  margin: 5px auto 0;
  overflow-x: auto;
  @media only screen and (min-width: 667px) {
    height: 63%;
  }
  @media only screen and (min-width: 1024px) {
    height: 70%;

    margin: 50px auto 0;
  }
  li {
    margin-top: 10px;
    @media only screen and (min-width: 1024px) {
      margin-top: 20px;
    }
    .stats-tournament-card:hover ~ button.delete {
      display: block;
      opacity: 1;
    }
    div.wrap--stats-tournament-card {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 340px;
      &:hover button.delete {
        display: block;
        opacity: 1;
      }
      button.delete {
        display: block;
        background: none;
        font-size: 34px;
        border: none;
        color: white;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 14px;
        opacity: 1;
        transition: opacity 0.15s ease-in-out;
        @media only screen and (min-width: 1024px) {
          opacity: 0;
          font-size: 18px;
        }
        svg {
          pointer-events: none;
        }
      }
    }
  }
`;

const CardWrapper = () => {
  const { stats, setStats } = useContext(StatsContext);
  const handleDelete = e => {
    const id = e.target.dataset.key;

    const newStats = [...stats].filter(item => item.key !== id);

    setStats(newStats);
  };

  const tournaments = stats.map((item, i) => (
    <li key={item.key}>
      <div className="wrap--stats-tournament-card">
        <StatsTournamentCard
          tournamentNumber={i + 1}
          date={item[0].date}
          winner={item.winner}
          id={item.key}
        />
        <button
          className="delete"
          onClick={handleDelete.bind(this)}
          data-key={item.key}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </li>
  ));

  return <Wrapper>{tournaments}</Wrapper>;
};

export default CardWrapper;
