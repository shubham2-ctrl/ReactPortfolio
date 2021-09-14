import React from "react";
import classes from "./Taskbar.module.css";
import battery from "../../images/battery copy.png";
import logo from "../../images/icon2.png";
import logosecond from "../../images/mcro.png";
import sound from "../../images/sound.png";
import wifi from "../../images/wifi.png";
import iconnew from "../../images/icon.png";
import IconHolder from "../UI/IconHolderDiv";
import Calendar from "../utils/Calendar";
import DateLanguageHolder from "../UI/DateLanguageHolder";
import TaskBarOpened from "../utils/TaskbarAppOpened";


const Taskbar = (props) => {
 

  const windowsLogo = (
    <svg
      onClick={props.windowsClicked}
      fill="#FFFFFF"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="30px"
      height="30px"
    >
      <path d="M12 16L3 16 3 23.75 12 24.988zM12 5L3 6.25 3 14 12 14zM14 4.75L14 14 27 14 27 3zM14 16L14 25.25 27 27 27 16z" />
    </svg>
  );

  return (
    <>
      <div className={classes["taskbar-container"]}>
        <div className={classes["svg-container"]}>
          {windowsLogo}
          <div>
            <input
              className={classes["taskbar-inputnew"]}
              type="search"
              placeholder=" Type here for search"
            />
          </div>
     
          <TaskBarOpened/>
         
        </div>
        <div className={classes["taskbar_accessibility-container"]}>
          <IconHolder>
            <img src={logo} alt="Logo" />
          </IconHolder>
          <IconHolder>
            <img src={sound} alt="Logo" />
          </IconHolder>
          <IconHolder>
            <img src={battery} alt="Logo" />
          </IconHolder>
          <IconHolder>
            <img src={wifi} alt="Logo" />
          </IconHolder>
          <IconHolder>
            <img src={logosecond} alt="Logo" />
          </IconHolder>
          <DateLanguageHolder>
            <p>ENG</p>
            <p>IN</p>
          </DateLanguageHolder>
          <Calendar />

          <IconHolder>
            <img src={iconnew} alt="Logo" onClick={props.onClickLeft} />
          </IconHolder>
        </div>
      </div>
    </>
  );
};

export default Taskbar;
