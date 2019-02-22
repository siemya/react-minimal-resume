import React, { Component } from "react";
import about from "../Config/about";
import theme from "../Config/theme";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div style={{ marginTop: 100 }}>
          <div
            className="project-image"
            style={{
              height: 200,
              width: 200,
              backgroundSize: "cover",
              borderRadius: 100,
              margin: "auto",
              backgroundImage: "url(" + require("../Images/me.png") + ")"
            }}
          />
        </div>
        <div
          className="about"
          style={{ textAlign: "center", marginTop: 20, marginBottom: 100 }}
        >
          <p className="light-p" style={{ fontSize: 30, lineHeight: "50px" }}>
            {about.description}
            <span>
              <a
                href={"mailto:" + about.mail}
                style={{ color: theme.themeColor }}
              >
                {about.mail}
              </a>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
