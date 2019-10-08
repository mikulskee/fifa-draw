import React from "react";
import MainTemplate from "./templates/MainTemplate";
import NewCupTemplate from "./templates/NewCupTemplate";
import StatsTemplate from "./templates/StatsTemplate";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={MainTemplate} />
        <Route path="/newcup" component={NewCupTemplate} />
        <Route path="/stats" component={StatsTemplate} />
      </BrowserRouter>
    </div>
  );
};

export default App;
