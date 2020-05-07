// import React
import React from "react";
// deconstruct needed objects from react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
// import Nav component
import Nav from "./components/Nav";

// App function
function App() {
  // return JSX to be rendered
  return (
    // Router holds routes for pages navigable
    <Router>
      <div>
        {/* put Nav at top of every page rendered */}
        <Nav />
        {/* holds all routes */}
        <Switch>
          {/* root route loads Hom page */}
          <Route exact path="/" component={Home} />
          {/* /saved route loads Saved page */}
          <Route exact path="/saved" component={Saved} />
          {/* 404 not found route */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

// export App
export default App;
