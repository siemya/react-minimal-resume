import React, { Component } from "react";
import experienceData from "../Config/experienceData";
import theme from "../Config/theme";
import Collapsible from "react-collapsible";
import Lightbox from "react-images";
var FontAwesome = require("react-fontawesome");

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openLink(linkToOpen, e) {
    window.open(linkToOpen);
    e.stopPropagation();
  }

  closeLightbox() {
    this.setState({ isOpen: false });
  }

  onImageClick(imageUrl) {
    imageUrl = require("../Images/" + imageUrl);
    this.setState({ imageUrl, isOpen: true });
  }

  renderLabels(experience) {
    let tech = experience.tech || [];
    return tech.map(t => {
      return (
        <span key={t} className="tech-label light-p">
          {t}
        </span>
      );
    });
  }

  renderWebsite(website) {
    return (
      <div className="light-p website">
        <a
          target="_blank"
          href={website}
          style={{ cursor: "pointer", color: theme.themeColor }}
        >
          <FontAwesome name="globe" size={7} /> {website}
        </a>
      </div>
    );
  }

  renderExperienceTitle(experience, firmName) {
    let period = experience.period;
    period = period ? (
      <span>({period[1] ? period[0] + " - " + period[1] : period[0]})</span>
    ) : (
      ""
    );
    return (
      <div style={{ marginTop: 30 }}>
        <a
          target="_blank"
          style={{
            cursor: "pointer",
            color: this.state["hoverExperiencetTitle" + firmName]
              ? theme.themeColor
              : "initial"
          }}
          onMouseEnter={() => {
            this.setState({ ["hoverExperiencetTitle" + firmName]: true });
          }}
          onMouseLeave={() => {
            this.setState({ ["hoverExperiencetTitle" + firmName]: false });
          }}
          className="title"
        >
          <span className="bold-p t">{firmName}</span>
        </a>
        <div style={{ marginTop: -5 }}>
          <div className="light-p title">
            {experience.title} <span className="period">{period}</span>
          </div>
        </div>
      </div>
    );
  }

  renderProjectTitle(projectName) {
    return (
      <div style={{ marginLeft: 30, marginTop: 20 }}>
        <a
          target="_blank"
          style={{
            cursor: "pointer",
            color: this.state["hoverProjectTitle" + projectName]
              ? theme.themeColor
              : "initial"
          }}
          onMouseEnter={() => {
            this.setState({ ["hoverProjectTitle" + projectName]: true });
          }}
          onMouseLeave={() => {
            this.setState({ ["hoverProjectTitle" + projectName]: false });
          }}
          className="title"
        >
          <span className="bold-p" style={{ fontSize: 40 }}>
            {projectName}
          </span>
        </a>
      </div>
    );
  }

  renderExperienceWrapper(experience, firmName) {
    return (
      <Collapsible
        key={firmName}
        trigger={this.renderExperienceTitle(experience, firmName)}
      >
        <div>
          {experience.website && this.renderWebsite(experience.website)}
        </div>
        <div>{this.renderLabels(experience)}</div>
        {experience.desc && (
          <div
            style={{ backgroundColor: theme.themeColor }}
            className="desc-label light-p"
          >
            {experience.desc}
          </div>
        )}
        <div key={firmName} className="firmExperienceWrapper">
          {experience.type !== "job"
            ? this.renderProjectList(experience.projectList, experience.type)
            : this.renderContribution(experience.contributionList)}
        </div>
      </Collapsible>
    );
  }

  renderProjectList(projectList = [], type) {
    return projectList.map((p, i) => {
      return (
        <Collapsible trigger={this.renderProjectTitle(p.title)} open={true}>
          <div className="personal-project">
            <div>{p.website && this.renderWebsite(p.website)}</div>
            <div>{this.renderLabels(p)}</div>
            {p.desc && (
              <div
                style={{ backgroundColor: theme.themeColor }}
                className="desc-label light-p"
              >
                {p.desc}
              </div>
            )}
            <div>{this.renderContribution(p.contributionList, type)}</div>
          </div>
        </Collapsible>
      );
    });
  }

  renderContribution(contributionList = [], type) {
    return contributionList.map(c => {
      const imgs = c.images || [];
      return (
        <div style={{ marginTop: type !== "job" ? -10 : 0 }}>
          {this.renderLabels(c)}
          {c.html && <p dangerouslySetInnerHTML={c.detail} />}
          {!c.html && (
            <p className="light-p" style={{ marginTop: 20 }}>
              <span className="circle" />
              {c.detail}
            </p>
          )}
          {imgs.length > 0 && (
            <div className="images">
              {imgs.map(i => {
                return (
                  <div
                    onClick={this.onImageClick.bind(this, i)}
                    className="outer-image"
                  >
                    <img
                      className="project-image"
                      key={i}
                      src={require("../Images/" + i)}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    });
  }

  render() {
    let { isOpen, imageUrl = "" } = this.state;
    return (
      <div>
        <div className="wrapper">
          {Object.keys(experienceData).map(k => {
            return this.renderExperienceWrapper(experienceData[k], k);
          })}
        </div>
        <Lightbox
          images={[{ src: imageUrl }]}
          isOpen={isOpen}
          showImageCount={false}
          backdropClosesModal={true}
          onClose={this.closeLightbox.bind(this)}
        />
      </div>
    );
  }
}

export default Experience;
