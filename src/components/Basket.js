import React, { useContext } from "react";
import styled from "styled-components";
import { Title } from "../components/Title";
import { TeamsContext } from "../contexts/TeamsContext";
import TeamsTable from "./TeamsTable";

const Wrapper = styled.div`
  width: 36%;
  background-color: #043c56;
  margin: 0 10px;
  border-radius: 10px;
  padding: 15px 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  h1 {
    position: static;
    text-align: center;
    transform: translateX(0);
    ::after {
      content: "";
      display: block;
      width: 60%;
      height: 3px;
      background-color: #fff;
      margin: 10px auto 0;
    }
  }

  img {
    cursor: auto !important;
  }
`;

const Basket = () => {
  const { teamsInBasket } = useContext(TeamsContext);

  return (
    <Wrapper>
      <Title medium>Koszyk</Title>
      <TeamsTable tournament>
        {teamsInBasket.map((team) => (
          <li key={team.id} className="basket--team-logo">
            <div>
              <img src={team.img} alt={team.team} className={team.class}></img>
            </div>
          </li>
        ))}
      </TeamsTable>
    </Wrapper>
  );
};

export default Basket;
