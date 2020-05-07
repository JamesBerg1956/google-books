// import React
import React from "react";
// import external stylesheet
import "./style.css";

// jumbotron function component - deconstruct props
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

// export jumbotron component
export default Jumbotron;
