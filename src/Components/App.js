import React, { Component } from "react";
import Experience from "./Experience";
import About from "./About";
import theme from "../Config/theme";
import aboutConfig from "../Config/about";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    const page = window.location.pathname === "/about" ? "about" : "home";
    this.state = { page };
  }

  onLinkClick(newPage) {
    this.setState({ page: newPage });
  }

  render() {
    let { page = "home" } = this.state;
    return (
      <Router>
        <div>
          <div className="App">
            <div className="navbar">
              <div className="nav-box">
                <span
                  style={{
                    fontFamily: "SabonLTPro-Roman",
                    lineHeight: "inherit"
                  }}
                  className="light-p logo"
                >
                  {aboutConfig.name}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="nav-box">
                  <a
                    onClick={() => this.onLinkClick("home")}
                    style={{
                      color:
                        page === "about"
                          ? "rgba(0, 0, 0, 0.7)"
                          : theme.themeColor,
                      marginRight: 10,
                      lineHeight: "inherit"
                    }}
                    className={
                      page === "about" ? "light-p link" : "light-p link"
                    }
                  >
                    <Link to="/">Experience</Link>
                  </a>
                </div>
                <div className="nav-box">
                  <a
                    onClick={() => this.onLinkClick("about")}
                    style={{
                      color:
                        page === "home"
                          ? "rgba(0, 0, 0, 0.7)"
                          : theme.themeColor,
                      lineHeight: "inherit"
                    }}
                    className={
                      page === "home" ? "light-p link" : "light-p link"
                    }
                  >
                    <Link to="/about">About</Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Route exact path="/" component={Experience} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
