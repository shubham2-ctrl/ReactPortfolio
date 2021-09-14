
import Modal from "../UI/Modal";
import classes from './GoogleChrome.module.css';

const VsCode = (props) => {
  return (
    <Modal  onClose={props.onClose} style={props.style} headerClicked ={props.headerClicked}>
  
        <iframe
          src="https://github1s.com/shubham2-ctrl/ReactPortfolio" frameBorder="0" 
          className={classes.iframe}
          title="VsCode"
        
        ></iframe>
  
    </Modal>
  );
};


//Link for the original repo: https://github.com/conwnet/github1s
export default VsCode;

