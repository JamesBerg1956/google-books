// import react and Component
import React, { Component } from "react";
// import Link component
import { Link } from "react-router-dom";
// import external spreadsheet
import "./style.css";

// Nav class component
class Nav extends Component {
  // create a state object
  state = {
    open: false,
    width: window.innerWidth
  };

  // updateWidth function 
  updateWidth = () => {

    // get current window width
    const newState = { width: window.innerWidth };

    // if the window is open and window width is > 991
    if (this.state.open && newState.width > 991) {
      // set the open state to false
      newState.open = false;
    }

    // set the new state for width
    this.setState(newState);
  };

  // toggleNav function
  toggleNav = () => {
    // reverse the state of open
    this.setState({ open: !this.state.open });
  };

  // this is called anytime a component renders
  componentDidMount() {
    // add an event listener called resize to window object
    window.addEventListener("resize", this.updateWidth);
  }

  // this is called anytime a component is unrendered
  componentWillUnmount() {
    // remove the event listener from the window
    window.removeEventListener("resize", this.updateWidth);
  }

  // render elements to the page
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// export Nav component
export default Nav;
