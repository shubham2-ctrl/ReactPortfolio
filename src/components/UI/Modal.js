import { useState } from "react";
import Draggable from "react-draggable";
import maximizeIcon from "../../images/maximize.png";
import minimizeIcon from "../../images/minize.png";

import classes from "./NavButton.module.css";

const Modal = (props) => {
  const [maximize, setMaximize]= useState(false);


  const maximizeHandler = () =>{
   
    setMaximize(true);
    if(maximize){
      setMaximize(false);
    }
  }

  const myClass = maximize ? "full_width": `modal_div`;

  return (
    <Draggable bounds="parent">
      <div className={myClass} style ={props.style} onPointerEnter={props.headerClicked}  >
        <div
          className={classes["opening_Closing-Button"]}
          onDoubleClick={maximizeHandler}
          
        >
          <button onClick={() => {}} onTouchStart={() => {}}>
            -
          </button>
          {maximize && (
            <button onClick={ () => setMaximize(false)} onTouchStart={ () => setMaximize(false)}>
              <img src={minimizeIcon} alt="minimize" />
            </button>
          )}
          {!maximize && (
            <button onClick={maximizeHandler} onTouchStart={maximizeHandler}>
              <img src={maximizeIcon} alt="minimize" />
            </button>
          )}

          <button onClick={props.onClose} onTouchStart={props.onClose}>
            x
          </button>
        </div>
        
        {props.children}
       
      </div>
    </Draggable>
  );
};

export default Modal;
