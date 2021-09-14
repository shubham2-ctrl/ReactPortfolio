import Modal from "../UI/Modal";
import classes from './GoogleChrome.module.css';

const GoogleChrome = (props) => {
  return (
    <Modal  onClose={props.onClose} style={props.style} headerClicked ={props.headerClicked}>
  
        <iframe
          src="https://www.google.com/webhp?igu=1"
          className={classes.iframe}
          title="Google"
        
        ></iframe>
  
    </Modal>
  );
};

export default GoogleChrome;
