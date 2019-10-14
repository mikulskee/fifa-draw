import React, { createContext, useState } from "react";

export const ScoresContext = createContext();

const ScoresContextProvider = props => {
  return (
    <ScoresContext.Provider value={{}}>{props.children}</ScoresContext.Provider>
  );
};

export default ScoresContextProvider;
