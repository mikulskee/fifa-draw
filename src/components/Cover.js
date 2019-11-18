import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(100%);

  .card-one,
  .card-two {
    height: 100%;
    width: 100%;
    background-color: #044d60;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(0);
    visibility: hidden;
  }
  .card-two {
    background-color: #fff;
  }
`;

const Cover = () => {
  return (
    <Wrapper className="cover">
      <div className="card-two" />
      <div className="card-one" />
    </Wrapper>
  );
};

export default Cover;
