import IconHolder from "../UI/IconHolderDiv";
import logo from "../../images/icon2.png";
import logosecond from "../../images/mcro.png";
import sound from "../../images/sound.png";
import wifi from "../../images/wifi.png";
import classes from './Box.module.css';

const Box = () =>{

 return (
    <div className={classes.container}>
        
    <IconHolder>
      <img src={logo} alt="Logo" />
    </IconHolder>
    <IconHolder>
      <img src={sound} alt="Logo" />
    </IconHolder>
    <IconHolder>
      <img src={wifi} alt="Logo" />
    </IconHolder>
    <IconHolder>
      <img src={logosecond} alt="Logo" />
    </IconHolder>

</div>
 );
  
};

export default Box;