// import React
import React from "react";
// import ReactDOM
import ReactDOM from "react-dom";
// import App.js
import App from "./App";
// import the serviceWorker
import registerServiceWorker from "./registerServiceWorker";

// render App.js to #root element in index.html
ReactDOM.render(<App />, document.getElementById("root"));

// regerster the serviceWorker
registerServiceWorker();
