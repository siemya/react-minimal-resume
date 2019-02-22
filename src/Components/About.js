import React, { Component } from "react";
import theme from "../Config/theme";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const about = "ABOUT ME ";
    const mail = "me@mail.com";
    const profileImageName = "me.png";
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
              backgroundImage:
                "url(" + require("../Images/" + profileImageName) + ")"
            }}
          />
        </div>
        <div
          className="about"
          style={{ textAlign: "center", marginTop: 20, marginBottom: 100 }}
        >
          <p className="light-p" style={{ fontSize: 30, lineHeight: "50px" }}>
            {about}
            <span>
              <a href={"mailto:" + mail} style={{ color: theme.themeColor }}>
                {mail}
              </a>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
