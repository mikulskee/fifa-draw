import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const MainTemplate = () => {
  return (
    <Background flex>
      <Logo big={"big"} />
      <Navbar />
    </Background>
  );
};

export default MainTemplate;
