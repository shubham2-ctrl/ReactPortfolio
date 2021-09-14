import classes from "./DekstopLogo.module.css";
import aboutme from "../../images/icons/aboutme.png";
import spotify from "../../images/icons/Spotify.png";
import chrome from "../../images/icons/chrome.png";
import vscode from "../../images/icons/VsCode.png";
import Spotify from "../Apps/Spotify";
import AboutMe from "../Apps/AboutMe";
import VsCode from "../Apps/VsCode";
import GoogleChrome from "../Apps/GoogleChrome";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../store/AppSlice";
import Personalized from "../Apps/Personalized";
import Contact from "../Apps/Contact";

var myIndex = 1;
var spotifyIndex = 1;
var chromeIndex = 1;
var vsCodeIndex = 1;

const DekstopLogo = () => {
  const aboutMeOpened = useSelector(
    (state) => state.isappOpened.isAboutMeOpened
  );

  const spotifyOpened = useSelector(
    (state) => state.isappOpened.isSpotifyOpened
  );

  const vsCodeOpened = useSelector((state) => state.isappOpened.isVsCodeOpened);

  const chromeOpened = useSelector((state) => state.isappOpened.isChromeOpened);

  const personalizeWindows = useSelector((state)=>state.isappOpened.isPersonalize)

  
  const dispatch = useDispatch();

  const buttonHandler = (id) => {
    if (id === "about-us") {
      dispatch(appActions.AboutMeOpened(true));

      myIndex += 1;
      if (spotifyOpened) {
        myIndex += spotifyIndex + 1;
      } else if (chromeOpened) {
        myIndex += chromeIndex + 1;
      } else if (vsCodeOpened) {
        myIndex += vsCodeIndex + 1;
      } else if (chromeOpened && spotifyOpened && aboutMeOpened) {
        myIndex += vsCodeIndex + chromeIndex + vsCodeIndex;
      }
    }
    if (id === "spotify") {
      dispatch(appActions.SpotifyOpened(true));
      spotifyIndex += 1;
      if (aboutMeOpened) {
        spotifyIndex += myIndex + 1;
      } else if (chromeOpened) {
        spotifyIndex += chromeIndex + 1;
      } else if (vsCodeOpened) {
        spotifyIndex += vsCodeIndex + 1;
      } else if (chromeOpened && vsCodeOpened && aboutMeOpened) {
        spotifyIndex += chromeIndex + vsCodeIndex + myIndex;
      }
    }
    if (id === "googleChrome") {
      dispatch(appActions.chromeOpened(true));
      chromeIndex += 1;
      if (aboutMeOpened) {
        chromeIndex += myIndex + 1;
      } else if (vsCodeOpened) {
        chromeIndex += vsCodeIndex + 1;
      } else if (spotifyOpened) {
        chromeIndex += spotifyIndex + 1;
      } else if (vsCodeOpened && spotifyOpened && aboutMeOpened) {
        chromeIndex += vsCodeIndex + spotifyIndex + myIndex;
      }
    }
    if (id === "vsCode") {
      dispatch(appActions.vsCodeOpened(true));
      vsCodeIndex += 1;
      if (aboutMeOpened) {
        vsCodeIndex += myIndex + 1;
      } else if (chromeOpened) {
        vsCodeIndex += chromeIndex + 1;
      } else if (spotifyOpened) {
        vsCodeIndex += spotifyIndex + 1;
      } else if (chromeOpened && spotifyOpened && aboutMeOpened) {
        vsCodeIndex += chromeIndex + spotifyIndex + myIndex;
      }
    }
  };

  const CloseButtonHandler = (id) => {
    if (id === "about-us") {
      dispatch(appActions.AboutMeOpened(false));
    }
    if (id === "spotify") {
      dispatch(appActions.SpotifyOpened(false));
    }
    if (id === "googleChrome") {
      dispatch(appActions.chromeOpened(false));
    }
    if (id === "vsCode") {
      dispatch(appActions.vsCodeOpened(false));
    }
    if (id === "personalized") {
      dispatch(appActions.personalizeOpened(false));
    }
  };

  return (
    <>
      {personalizeWindows && 
      <Personalized onClose= {() => CloseButtonHandler("personalized")}/>
      }
      {aboutMeOpened && (
        <AboutMe
          onClose={() => CloseButtonHandler("about-us")}
          style={{ zIndex: myIndex }}
          headerClicked={() => buttonHandler("about-us")}
        />
      )}
      {spotifyOpened && (
        <Spotify
          onClose={() => CloseButtonHandler("spotify")}
          style={{ zIndex: spotifyIndex }}
          headerClicked={() => buttonHandler("spotify")}
        />
      )}
      {chromeOpened && (
        <GoogleChrome
          onClose={() => CloseButtonHandler("googleChrome")}
          style={{ zIndex: chromeIndex }}
          headerClicked={() => buttonHandler("googleChrome")}
        />
      )}
      {vsCodeOpened && (
        <VsCode
          onClose={() => CloseButtonHandler("vsCode")}
          style={{ zIndex: vsCodeIndex }}
          headerClicked={() => buttonHandler("vsCode")}
        />
      )}
      {vsCodeOpened && (
        <Contact
          onClose={() => CloseButtonHandler("vsCode")}
          style={{ zIndex: vsCodeIndex }}
          headerClicked={() => buttonHandler("vsCode")}
        />
      )}

      <div
        className={classes["Logo_container-dekstop"]}
        style={{ height: "95vh" }}
      >
        <div
          className={classes["logo_holder"]}
          onDoubleClick={() => buttonHandler("about-us")}
          onTouchStart={() => buttonHandler("about-us")}
        >
          <img src={aboutme} alt="About Me folder"></img>
          <p className={classes["logo_headers"]}>About Me</p>
        </div>

        <div
          className={classes["logo_holder"]}
          onDoubleClick={() => buttonHandler("spotify")}
          onTouchStart={() => buttonHandler("spotify")}
        >
          <img src={spotify} alt="About Me folder"></img>
          <p className={classes["logo_headers"]}>Spotify</p>
        </div>

        <div
          className={classes["logo_holder"]}
          onDoubleClick={() => buttonHandler("googleChrome")}
          onTouchStart={() => buttonHandler("googleChrome")}
        >
          <img src={chrome} alt="About Me folder"></img>
          <p className={classes["logo_headers"]}>Google Chrome</p>
        </div>
        <div
          className={classes["logo_holder"]}
          onDoubleClick={() => buttonHandler("vsCode")}
          onTouchStart={() => buttonHandler("vsCode")}
        >
          <img src={vscode} alt="VsCode"></img>
          <p className={classes["logo_headers"]}>VsCode</p>
        </div>
        <div
          className={classes["logo_holder"]}
          onDoubleClick={() => buttonHandler("contact")}
          onTouchStart={() => buttonHandler("contact")}
        >
          <img src={vscode} alt="contact"></img>
          <p className={classes["logo_headers"]}>Contact</p>
        </div>
      </div>
    </>
  );
};

export default DekstopLogo;
