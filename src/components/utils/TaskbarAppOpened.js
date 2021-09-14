import aboutMeLogo from "../../images/icons/aboutme.png";
import spotify from "../../images/icons/Spotify.png";
import chrome from "../../images/icons/chrome.png";
import vscode from "../../images/icons/VsCode.png";
import { useSelector } from "react-redux";
import classes from "./TaskBarOpened.module.css";

const TaskBarOpened = () => {
  const aboutMeOpened = useSelector(
    (state) => state.isappOpened.isAboutMeOpened
  );

  const spotifyOpened = useSelector(
    (state) => state.isappOpened.isSpotifyOpened
  );

  const vsCodeOpened = useSelector((state) => state.isappOpened.isVsCodeOpened);

  const chromeOpened = useSelector((state) => state.isappOpened.isChromeOpened);

  return (
    <>
      {aboutMeOpened && (
        <div className={classes.appTaskBarNotation}>
          <img src={aboutMeLogo} alt="About Me"></img>
        </div>
      )}
      {spotifyOpened && (
        <div className={classes.appTaskBarNotation}>
          <img src={spotify} alt="About Me"></img>
        </div>
      )}
      {vsCodeOpened && (
        <div className={classes.appTaskBarNotation}>
          <img src={vscode} alt="About Me"></img>
        </div>
      )}
      {chromeOpened && (
        <div className={classes.appTaskBarNotation}>
          <img src={chrome} alt="About Me"></img>
        </div>
      )}
    </>
  );
};

export default TaskBarOpened;
