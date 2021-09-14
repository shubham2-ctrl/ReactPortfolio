import classes from "./Screen.module.css";
import { useState, useEffect } from "react";
import DekstopLogo from "./DekstopLogo";
import ContextMenu from "../utils/contextMenu";
import { useSelector } from "react-redux";
import wallpaper1 from "../../images/wallpaper/wallpaper1.jpg";
import wallpaper2 from "../../images/wallpaper/wallpaper2.jpg";
import wallpaper3 from "../../images/wallpaper/wallpaper3.jpg";


const Screen = (props) => {
  const wallpaperFirstCheck = useSelector((state)=> state.wallpaperChange.firstWallpaperSelected)
  const wallpaperSecondCheck = useSelector((state)=> state.wallpaperChange.secondWallpaperSelected)
  const wallpaperThirdCheck = useSelector((state)=> state.wallpaperChange.thirdWallpaperSelected)
  
  const [showContext, setShowContext] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });


 
  const updateMousePosition = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("click", updateMousePosition);

    return () => window.removeEventListener("click", updateMousePosition);
  }, []);

  const MainScreenClickHandler = (e) => {
    if (e.type === "contextmenu") {
      e.preventDefault();

      setShowContext(true);

      
    }
    if (e.type === "click") {
      setShowContext(false);
    }
  };

  let left = mousePosition.x - 225 + "px";

  let top = mousePosition.y;

  if (top + 320 > window.innerHeight) {
    top = top - 320 + "px";
  } else {
    top = top + "px";
  }

  const wallpaper = wallpaperFirstCheck ? wallpaper1 : wallpaperSecondCheck ? wallpaper2 : wallpaperThirdCheck ? wallpaper3 : wallpaper1

  return (
    <>
      <div
        className={classes.wallpaper}
        onContextMenu={MainScreenClickHandler}
        onClick={MainScreenClickHandler}
        style={{backgroundImage : `url(${wallpaper})`}}
      >
        <DekstopLogo />

        {showContext && <ContextMenu style={{ left: left, top: top }} />}
      </div>
    </>
  );
};

export default Screen;
