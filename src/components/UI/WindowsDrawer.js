import { useState } from "react";
import classes from "./WindowDrawer.module.css";
import { lockActions } from "../../store/LockButtonSlice";
import aboutme from "../../images/icons/aboutme.png";
import spotify from "../../images/icons/Spotify.png";
import chrome from "../../images/icons/chrome.png";
import vscode from "../../images/icons/VsCode.png";
import { useDispatch } from "react-redux";
import {appActions} from "../../store/AppSlice"

const WindowDrawer = () => {
  const dispatch = useDispatch();
  const [displayNav, setDisplayNav] = useState(false);
  const handleMouse = () => {
    setDisplayNav(true);
  };
  const shutDownClicked = () => {
    dispatch(lockActions.locked());
   
  };

  const OpenApp = (id) =>{
    
    if (id === "aboutMe") {
      dispatch(appActions.AboutMeOpened(true));
    }
    if (id === "Spotify") {
      dispatch(appActions.SpotifyOpened(true));
    }
    if (id === "googleChrome") {
      dispatch(appActions.chromeOpened(true));
    }
    if (id === "vsCode") {
      dispatch(appActions.vsCodeOpened(true));
    }
  }

  const innerSideNav = (
    <div
      className={classes.innerSideNav}
      onMouseLeave={() => setDisplayNav(false)}
    >
      <div className={classes.toptwice}>
        <i className="fa fa-bars" onMouseEnter={handleMouse}>
          {" "}
          <p>START</p>
        </i>
      </div>
      <div className={classes.bottomtwice}>
        <i className="fa fa-user" onMouseEnter={handleMouse}>
          {" "}
          <p> Portfolio</p>{" "}
        </i>
        <i className="fa fa-file" onMouseEnter={handleMouse}>
          {" "}
          <p>Documents</p>
        </i>
        <i className="fa fa-cog" onMouseEnter={handleMouse}>
          {" "}
          <p>Settings</p>
        </i>
        <i
          className="fa fa-power-off"
          onMouseEnter={handleMouse}
          onClick={shutDownClicked}
        >
          {" "}
          <p>Power</p>
        </i>
      </div>
    </div>
  );

  return (
    <div className={classes.selfDrawerContainer}>
      {displayNav && innerSideNav}
      <div className={classes.leftDrawerNav}>
        <div className={classes.top}>
          <i className="fa fa-bars" onMouseEnter={handleMouse}></i>
        </div>
        <div className={classes.bottom}>
          <i className="fa fa-user" onMouseEnter={handleMouse}></i>
          <i className="fa fa-file" onMouseEnter={handleMouse}></i>
          <i className="fa fa-cog" onMouseEnter={handleMouse}></i>
          <i
            className="fa fa-power-off"
            onMouseEnter={handleMouse}
            onClick={shutDownClicked}
          ></i>
        </div>
        <div className={classes.RightDrawerNav}>
          <div className={classes.WindowsStartAppholder} onClick={()=>OpenApp("aboutMe")}>
            {" "}
            <img src={aboutme} alt="about me" />
            <p>About Me</p>
          </div>
          <div className={classes.WindowsStartAppholder} onClick={()=>OpenApp("googleChrome")} >
            {" "}
            <img src={chrome} alt="Google Chrome" />
            <p>Google Chrome</p>
          </div>
          <div className={classes.WindowsStartAppholder} onClick={()=>OpenApp("vsCode")}>
            {" "}
            <img src={vscode} alt="Vs Code" />
            <p>Vs Code</p>
          </div>
          <div className={classes.WindowsStartAppholder} onClick={()=>OpenApp("Spotify")}>
            {" "}
            <img src={spotify} alt="Spotify" />
            <p>Spotify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowDrawer;
