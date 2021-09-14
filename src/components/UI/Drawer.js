import classes from "./Drawer.module.css";

let items = [
  {
    name: "Location",
    logo: "fa fa-map-marker",
  },
  { name: "Battery saver", logo: "fa fa-battery-full" },
  { name: "Rockerz 550", logo: "fa fa-bluetooth-b" },
  { name: "Night Light", logo: "fa fa-adjust" },
  { name: "Hotspot", logo: "fa fa-signal" },
  { name: "Airplane mode", logo: "fa fa-plane" },
  { name: "Sharing", logo: "fa fa-share" },
  { name: "All settings", logo: " fa fa-cog" },
  { name: "Wifi", logo: " fa fa-wifi" },
  { name: "Connect", logo: "fa fa-desktop" },
  { name: "Project", logo: "fa fa-laptop" },
  { name: "VPN", logo: "fa fa-shield" },
  { name: "Focus Assist", logo: "fa fa-moon-o" },
  { name: "Screen snip", logo: "fa fa-scissors" },
];

const Drawer = () => {


 

 


  return (
    <div className={classes.selfDrawerContainer}>
      <div className={classes.upperHalfContainer}>
        <p> No New Notification </p>
      </div>
      <div className={classes.lowerHalf}>
        <div className={classes.lowerhalfContainer}>
          {items.map((item, index) => (
            <div key={index} className={classes.accesoriesContainer} >
              <i className={item.logo}></i>
              <p> {item.name} </p>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.brightnessHolder}>
        <i className="fa fa-adjust"></i>
            <div> 
              <input type="range" className={classes.slider}></input>
            </div>
      </div>
    </div>
  );
};

export default Drawer;
