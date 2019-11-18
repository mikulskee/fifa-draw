import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const MainTemplate = () => {
  return (
    <Background flex className="main-template">
      <Logo big={"big"} />
      <Navbar />
    </Background>
  );
};

export default MainTemplate;
