import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Taskbar from "./components/Dekstop/Taskbar";
import Screen from "./components/Dekstop/Screen";
import Drawer from "./components/UI/Drawer";
import WindowDrawer from "./components/UI/WindowsDrawer";
import LockScreen from "./components/Dekstop/LockScreen";
import { lockActions } from "./store/LockButtonSlice";
import "./App.css";

const App = () => {
  const [drawerShow, setDrawerShow] = useState(false);
  const lock = useSelector((state) => state.isLocked.locked);
  const unlock = useSelector((state) => state.isLocked.unlock);
  const dispatch = useDispatch();

  const [windowClicked, setWindowClicked] = useState(false);

  const handleClickMessage = () => {
    if (drawerShow) {
      setDrawerShow(false);
    } else {
      setDrawerShow(true);
    }
    console.log("Hello");
  };

  const screenClickedHandler = () => {
    if (windowClicked) {
      setWindowClicked(false);
    }
    if (setDrawerShow) {
      setDrawerShow(false);
    }
  };

  const unlockClickHandler = () => {
    console.log("hi");
    dispatch(lockActions.unlock());
  };

  const windowsClickHandler = () => {
    if (windowClicked) {
      setWindowClicked(false);
    } else {
      setWindowClicked(true);
    }
  };

  return (
    <>
      {lock && !unlock ? (
        <LockScreen onClick={unlockClickHandler} />
      ) : (
        <div className="my_dekstop-div" onClick={screenClickedHandler}>
          <Screen />
        </div>
      )}
      {!lock && (
        <Taskbar
          onClickLeft={handleClickMessage}
          windowsClicked={windowsClickHandler}
        />
      )}
      {windowClicked && !lock && <WindowDrawer />}
      {drawerShow && <Drawer />}
    </>
  );
};

export default App;
