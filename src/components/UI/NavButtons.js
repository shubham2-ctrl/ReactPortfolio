import { useDispatch, useSelector } from "react-redux";
import maximizeIcon from "../../images/maximize.png";
import minimizeIcon from "../../images/minize.png";
import { maximizeActions } from "../../store/NavButtonsSlice";
import classes from "./NavButton.module.css";

const NavButtons = (props) => {
  const maximize = useSelector((state) => state.maximize.maximize);
  console.log(maximize);
  const {id} = props;
  const dispatch = useDispatch();

  const maximizeHandler = () => {
    if(id==='aboutMe')
    dispatch(maximizeActions.maximize());
  };
  const minimizeHandler = () => {
    dispatch(maximizeActions.minimize());
  };
  return (
    <div
      className={classes["opening_Closing-Button"]}
      onDoubleClick={maximizeHandler}
  
    >
      <button onClick={() => {}} onTouchStart={() => {}}>
        -
      </button>
      {maximize && (
        <button onClick={minimizeHandler} onTouchStart={minimizeHandler}>
          <img src={minimizeIcon} alt="minimize" />
        </button>
      )}
      {!maximize && (
        <button onClick={maximizeHandler} onTouchStart={maximizeHandler}>
          <img src={maximizeIcon} alt="minimize" />
        </button>
      )}
      
      <button onClick={() => {}} onTouchStart={() => {}}>
        x
      </button>
    </div>
  );
};
export default NavButtons;
