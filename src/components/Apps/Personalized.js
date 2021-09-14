import Modal from "../UI/Modal";
import classes from "./Personalize.module.css";
import wallpaper1 from "../../images/wallpaper/wallpaper1.jpg";
import wallpaper2 from "../../images/wallpaper/wallpaper2.jpg";
import wallpaper3 from "../../images/wallpaper/wallpaper3.jpg";
import { useDispatch, useSelector } from "react-redux";
import { wallpaperActions } from "../../store/WallpaperSlice";

const wallpapers = [
  {
    id: "wallpaper1",
    img: wallpaper1,
  },
  {
    id: "wallpaper2",
    img: wallpaper2,
  },
  {
    id: "wallpaper3",
    img: wallpaper3,
  },
];

const Personalized = (props) => {
  const dispatch = useDispatch();
  const onClickwallpaperChange = (id) => {
    if (id === "wallpaper1") {
      dispatch(wallpaperActions.wallpaperFirst(true));
      dispatch(wallpaperActions.wallpaperSecond(false));
      dispatch(wallpaperActions.wallpaperThird(false));
    }
    if (id === "wallpaper2") {
      dispatch(wallpaperActions.wallpaperSecond(true));
      dispatch(wallpaperActions.wallpaperThird(false));
      dispatch(wallpaperActions.wallpaperFirst(false));
    }
    if (id === "wallpaper3") {
      dispatch(wallpaperActions.wallpaperThird(true));
      dispatch(wallpaperActions.wallpaperSecond(false));
      dispatch(wallpaperActions.wallpaperFirst(false));
    }
  };

  const wallpaperFirstCheck = useSelector(
    (state) => state.wallpaperChange.firstWallpaperSelected
  );
  const wallpaperSecondCheck = useSelector(
    (state) => state.wallpaperChange.secondWallpaperSelected
  );
  const wallpaperThirdCheck = useSelector(
    (state) => state.wallpaperChange.thirdWallpaperSelected
  );

  const activeWallpaper = wallpaperFirstCheck
    ? wallpaper1
    : wallpaperSecondCheck
    ? wallpaper2
    : wallpaperThirdCheck
    ? wallpaper3
    : wallpaper1;

  return (
    <Modal id="Personalize" onClose={props.onClose} style={props.style} headerClicked ={props.headerClicked}>
      <div className={classes.container}>
        <div className={classes.activeWallpaper}>
          <h1> Background </h1>
          <img src={activeWallpaper} alt="Active Wallpaper"></img>
        </div>
        <div className={classes.wallpaperSelect}>
          <h3> Choose your Wallpaper</h3>
          {wallpapers.map((wallpaper) => (
            <img
              key={wallpaper.id}
              src={wallpaper.img}
              alt={wallpaper.id}
              className={classes.img}
              onClick={() => onClickwallpaperChange(wallpaper.id)}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Personalized;
