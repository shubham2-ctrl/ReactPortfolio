import Modal from "../UI/Modal";
import classes from "./AboutMe.module.css";
import React, { useState } from "react";
import resumepdf from "../../images/Resume.pdf";
import shubham from "../../images/shubhamKumarSingh.jpg";
import SideNavAboutUs from "../UI/SideNavAboutUs";
import SideNavMobile from "../UI/SideNavMobile";

const AboutMe = (props) => {
  const [education, setEducation] = useState(false);
  const [skills, setSkills] = useState(false);
  const [resume, setResume] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  const EducationClickHandler = () => {
    setEducation(true);
  };

  const SkillsClickHandler = () => {
    if (education) {
      setEducation(false);
    }
    setSkills(true);
  };
  const AboutMeClickHandler = () => {
    setSkills(false);
    setEducation(false);
    setResume(false);
  };
  const ResumeClickHandler = () => {
    if (education || skills) {
      setEducation(false);
      setSkills(false);
    }
    setResume(true);
  };

  const aboutMe = (
    <div className={classes.imageContainer} id="new">
      <img src={shubham} alt="Shubham Kumar Singh"></img>

      <h4>Shubham Kumar Singh</h4>
      <h1 className={classes.header}> User Experience Designer</h1>
      <p className={classes.quote}>
        Website without visitors is like a ship lost in the horizon.
      </p>
      <p className={classes.quote}>
        I build User Interactive websites that work seamlessly across all
        devices, with a focus on user engagement.
      </p>
    </div>
  );

  const Education = (
    <div className={classes.imageContainer} id="new">
      <h4 style={{ textAlign: "center" }}>Education</h4>
      <h1 className={classes.header} style={{ textAlign: "center" }}>
        Marwari College Ranchi, Jharkhand
      </h1>
      <p
        className={classes.quote}
        style={{ textAlign: "right", marginBottom: ".75rem" }}
      >
        Bachelors in Computer Application 2019 - Current
      </p>
      <h1 className={classes.header} style={{ textAlign: "center" }}>
        Dav Kapildev Public School
      </h1>
      <p className={classes.quote} style={{ textAlign: "right" }}>
        Class 12th (CBSE) | 2017-2019
      </p>
    </div>
  );
  const Skills = (
    <div className={classes.imageContainer} id="new">
      <h4 style={{ textAlign: "center" }}>Skills</h4>

      <div className={classes.skillsContainer}>
        <h6 className={classes.Headers}> Programming Languages </h6>
        <ul className={classes.tags}>
          <li>
            <button className={classes.tag}>C++</button>
          </li>
          <li>
            <button className={classes.tag}>Python</button>
          </li>
          <li>
            <button className={classes.tag}>C</button>
          </li>
        </ul>

        <h6 className={classes.Headers}> IT Constructs </h6>
        <ul className={classes.tags}>
          <li>
            <button className={classes.tag}>DS and Algorithms</button>
          </li>
          <li>
            <button className={classes.tag}>OOPS</button>
          </li>
        </ul>
        <h6 className={classes.Headers}> Web Technologies </h6>
        <ul className={classes.tags}>
          <li>
            <button className={classes.tag}>HTML</button>
          </li>
          <li>
            <button className={classes.tag}>CSS</button>
          </li>
          <li>
            <button className={classes.tag}>Javascript</button>
          </li>
          <li>
            <button className={classes.tag}>Bootstrap</button>
          </li>
        </ul>
        <h6 className={classes.Headers}> Frameworks </h6>
        <ul className={classes.tags}>
          <li>
            <button className={classes.tag}>React js</button>
          </li>
          <li>
            <button className={classes.tag}>Django</button>
          </li>
        </ul>
        <h6 className={classes.Headers}> Deployment Tools </h6>
        <ul className={classes.tags}>
          <li>
            <button className={classes.tag}>Firebase</button>
          </li>
          <li>
            <button className={classes.tag}>DigitalOcean</button>
          </li>
        </ul>
      </div>
    </div>
  );
  const Resume = (
    <div className={classes.imageContainer} id="new">
      <h4 style={{ textAlign: "center" }}> Resume </h4>
      <iframe
        title="Resume"
        id="iframepdf"
        src={resumepdf}
        className={classes.resumeHolder}
      >
        {" "}
      </iframe>
    </div>
  );

  const mobileToggleButton = () => {
    setMobileToggle(true);
    if (mobileToggle) {
      setMobileToggle(false);
    }
  };

  const checkMobileToggle = () => {
    console.log("hi");
    if (mobileToggle) {
      setMobileToggle(false);
    }
  };
  return (
    <>
      <Modal
        id="about-Me"
        onClose={props.onClose}
        style={props.style}
        headerClicked={props.headerClicked}
      >
        {
          <SideNavAboutUs
            onEducationClicked={EducationClickHandler}
            onAboutMeClicked={AboutMeClickHandler}
            onResumeClicked={ResumeClickHandler}
            onSkillClicked={SkillsClickHandler}
          />
        }{" "}
        <div className={classes.container} onTouchStart={checkMobileToggle}>
          {education ? Education : skills ? Skills : resume ? Resume : aboutMe}
        </div>
        <div
          className={classes.MenuContainers}
          onMouseEnter={mobileToggleButton}
          onTouchStart={mobileToggleButton}
        >
          <div className={classes.menuButton}>
            <i
              className="fa fa-bars"
              style={{ fontSize: "24px", color: "white" }}
            ></i>
          </div>
          {mobileToggle && (
            <SideNavMobile
              onEducationClicked={EducationClickHandler}
              onAboutMeClicked={AboutMeClickHandler}
              onResumeClicked={ResumeClickHandler}
              onSkillClicked={SkillsClickHandler}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default AboutMe;
