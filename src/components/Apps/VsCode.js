
import Modal from "../UI/Modal";
import classes from './GoogleChrome.module.css';

const VsCode = (props) => {
  return (
    <Modal  onClose={props.onClose} style={props.style} headerClicked ={props.headerClicked}>
  
        <iframe
          src="https://github1s.com/shubham2-ctrl/PortfolioReact" frameBorder="0" 
          className={classes.iframe}
          title="VsCode"
        
        ></iframe>
  
    </Modal>
  );
};

export default VsCode;

