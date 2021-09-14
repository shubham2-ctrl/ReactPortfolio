import myImage from "../../images/shubhamKumarSingh.jpg";
import classes from "./LockScree.module.css";

const LockScreen = (props) => {

    let newdate = new Date();
    let hour = newdate.getHours();
    let minutes = newdate.getMinutes();

    if(minutes.toLocaleString().length === 1){
        minutes = "0" + minutes;
    }
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"]
    var months = ["January","Feburary","March","April","May","June","August","September","October","November", "December"]
    let date = newdate.getDate();
    let day = newdate.getDay();

    day = days[day];

    let month = newdate.getMonth()-1;
    month = months[month];

   

    if(hour === 12){
        hour = 12;
    }else if(hour>12){
        hour -=12;
    
    }
  const svg = (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width="33px"
      height="24px"
      viewBox="0 0 92.179 92.18"
    >
      <g>
        <path
          d="M73.437,36.54v-9.192C73.437,12.268,61.169,0,46.09,0S18.744,12.268,18.744,27.348h11.355
    c0-8.818,7.173-15.992,15.991-15.992c8.817,0,15.991,7.174,15.991,15.992v9.192H9.884v55.64h72.411V36.54H73.437z M50.609,71.115
    V83.33h-9.037V71.115c-2.102-1.441-3.482-3.858-3.482-6.6c0-4.418,3.582-8,8-8s8,3.582,8,8
    C54.09,67.257,52.71,69.674,50.609,71.115z"
        />
      </g>
    </svg>
  );
  return (<>
    <div className={classes.containerLockScreen}>
      <div className={classes.containerImageLockScreen}>
        <img src={myImage} alt="Shubham Kumar Singh"/>
        <h1>Shubham Kumar Singh</h1>
      </div>
      <div className={classes.buttonContainer}>
        <button onClick={props.onClick} className={classes.unlockButton}>
          {svg}
        </button>
      </div>
      
    <div className={classes.timeDateHolder}>
    <h1>{hour}:{minutes} </h1>
    <h6> {day}, {month} {date}  </h6>
    </div>
    </div>
     </>
  );
};

export default LockScreen;
