import classes from "./DekstopLogo.module.css";
import aboutme from "../../images/icons/aboutme.png";
import spotify from "../../images/icons/Spotify.png";
import chrome from "../../images/icons/chrome.png";
import vscode from "../../images/icons/VsCode.png";
import contact from "../../images/icons/contact.png";
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
var myContact = 1;
var personalize = 1;

const DekstopLogo = () => {
  const aboutMeOpened = useSelector(
    (state) => state.isappOpened.isAboutMeOpened
  );

  const spotifyOpened = useSelector(
    (state) => state.isappOpened.isSpotifyOpened
  );

  const vsCodeOpened = useSelector((state) => state.isappOpened.isVsCodeOpened);

  const chromeOpened = useSelector((state) => state.isappOpened.isChromeOpened);

  const contactOpened = useSelector((state) => state.isappOpened.isContact);

  const personalizeWindows = useSelector(
    (state) => state.isappOpened.isPersonalize
  );
  

  
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
      } else if (personalizeWindows) {
        myIndex += personalize + 1;
      } else if (contactOpened) {
        myIndex += myContact + 1;
      } else if (
        chromeOpened &&
        spotifyOpened &&
        aboutMeOpened &&
        contactOpened &&
        personalizeWindows
      ) {
        myIndex +=
          vsCodeIndex + chromeIndex + vsCodeIndex + myContact + personalize;
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
      } else if (contactOpened) {
        spotifyIndex += myContact + 1;
      } else if (personalizeWindows) {
        myIndex += personalize + 1;
      } else if (
        chromeOpened &&
        vsCodeOpened &&
        aboutMeOpened &&
        personalizeWindows &&
        contactOpened
      ) {
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
      } else if (contactOpened) {
        chromeIndex += myContact + 1;
      } else if (personalizeWindows) {
        chromeIndex += personalize + 1;
      } else if (
        vsCodeOpened &&
        spotifyOpened &&
        aboutMeOpened &&
        personalizeWindows &&
        contactOpened
      ) {
        chromeIndex +=
          vsCodeIndex + spotifyIndex + myIndex + myContact + personalize;
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
      } else if (contactOpened) {
        vsCodeIndex += myContact + 1;
      } else if (personalizeWindows) {
        vsCodeIndex += personalize + 1;
      } else if (
        chromeOpened &&
        spotifyOpened &&
        aboutMeOpened &&
        contactOpened &&
        personalizeWindows
      ) {
        vsCodeIndex +=
          chromeIndex + spotifyIndex + myIndex + myContact + personalize;
      }
    }
    if (id === "contact") {
      dispatch(appActions.contactOpened(true));
      if (aboutMeOpened) {
        myContact += myIndex + 1;
      } else if (chromeOpened) {
        myContact += chromeIndex + 1;
      } else if (spotifyOpened) {
        myContact += spotifyIndex + 1;
      } else if (vsCodeOpened) {
        myContact += vsCodeIndex + 1;
      } else if (personalizeWindows) {
        myContact += personalize + 1;
      } else if (
        chromeOpened &&
        spotifyOpened &&
        aboutMeOpened &&
        vsCodeOpened &&
        personalizeWindows
      ) {
        myContact +=
          chromeIndex + spotifyIndex + myIndex + vsCodeIndex + personalize;
      }
    }
    if (id === "personalize") {
      if (aboutMeOpened) {
        personalize += myIndex + 1;
      } else if (chromeOpened) {
        personalize += chromeIndex + 1;
      } else if (spotifyOpened) {
        personalize += spotifyIndex + 1;
      } else if (vsCodeOpened) {
        personalize += vsCodeIndex + 1;
      } else if (contactOpened) {
        personalize += myContact + 1;
      } else if (
        chromeOpened &&
        spotifyOpened &&
        aboutMeOpened &&
        vsCodeOpened &&
        contactOpened
      ) {
        personalize +=
          chromeIndex + spotifyIndex + myIndex + vsCodeIndex + personalize;
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
    if (id === "contact") {
      dispatch(appActions.contactOpened(false));
    }
  };

  if (aboutMeOpened) {
    personalize += myIndex + 1;
  } else if (chromeOpened) {
    personalize += chromeIndex + 1;
  } else if (spotifyOpened) {
    personalize += spotifyIndex + 1;
  } else if (vsCodeOpened) {
    personalize += vsCodeIndex + 1;
  } else if (contactOpened) {
    personalize += myContact + 1;
  } else if (
    chromeOpened &&
    spotifyOpened &&
    aboutMeOpened &&
    vsCodeOpened &&
    contactOpened
  ) {
    personalize +=
      chromeIndex + spotifyIndex + myIndex + vsCodeIndex + personalize;
  }

  return (
    <>
      {personalizeWindows && (
        <Personalized
          onClose={() => CloseButtonHandler("personalized")}
          style={{ zIndex: personalize }}
          headerClicked={() => buttonHandler("personalize")}
        />
      )}
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
      {contactOpened && (
        <Contact
          onClose={() => CloseButtonHandler("contact")}
          style={{ zIndex: myContact }}
          headerClicked={() => buttonHandler("contact")}
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
          <p className={classes["logo_headers"]}>About Shubham</p>
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
          <img src={contact} alt="contact"></img>
          <p className={classes["logo_headers"]}>Contact</p>
        </div>
      </div>
    </>
  );
};

export default DekstopLogo;
