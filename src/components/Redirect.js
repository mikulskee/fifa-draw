import React, { useEffect } from "react";
import Background from "./Background";
import { withRouter } from "react-router-dom";

const Redirect = props => {
  useEffect(() => {
    props.history.push("/");
  }, [props.history]);

  return <Background />;
};

export default withRouter(Redirect);
