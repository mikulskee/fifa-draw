import React, { useContext } from "react";
import styled from "styled-components";
import { Title } from "../components/Title";
import { TeamsContext } from "../contexts/TeamsContext";
import TeamsTable from "./TeamsTable";

const Wrapper = styled.div`
  width: 40%;
  background-color: #043c56;
  margin: 0 10px;
  border-radius: 10px;
  padding: 15px 0;
  h1 {
    position: static;
    text-align: center;
    transform: translateX(0);
    margin-bottom: 30px;
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
      <Title>Koszyk</Title>
      <TeamsTable>
        {teamsInBasket.map(team => (
          <li key={team.id} className="basket--team-logo">
            <div>
              <img src={team.img} alt={team.team}></img>
            </div>
          </li>
        ))}
      </TeamsTable>
    </Wrapper>
  );
};

export default Basket;
