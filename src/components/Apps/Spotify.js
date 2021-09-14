import Modal from "../UI/Modal";
import classes from './AboutMe.module.css';

const Spotify = (props) => {
  
  return (
   <Modal  id="spotify" onClose={props.onClose} style={props.style} headerClicked ={props.headerClicked}>
  
       <iframe
      src="https://open.spotify.com/embed/playlist/4nNVfQ9eWidZXkBKZN5li4"
      className={classes.iframe}
      frameBorder="0"
      title="Spotify"
     
    ></iframe>
       
 
   </Modal>
  );
};

export default Spotify;
