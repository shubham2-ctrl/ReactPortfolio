import classes from './Contact.module.css'
import { useState } from 'react';
import emailjs from 'emailjs-com';
import LoadingSpinner from '../UI/LoadingSpinner';
const Contact = (props) =>{

  const [enquire,setEnquire] = useState(false);
  

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        setEnquire(true);
        emailjs.sendForm( process.env.REACT_APP_MY_SERVICE_ID, process.env.REACT_APP_MY_TEMPLATE_ID, e.target, process.env.REACT_APP_MY_USER_ID )
          .then((result) => {
            //   console.log(result.text);
            setEnquire(false);
           
          }, (error) => {
            //   console.log(error.text);
            setEnquire(false);
          });
          e.target.reset();
    
    }
  
    return (
        <div className={classes.fullContainer}>
           
            <div className={classes.container}>
            <button onClick={props.onClose} className={classes.btn}> X </button>
                <h1> Contact Me</h1>
            <form onSubmit={onSubmitHandler} className={classes.formControl} draggable="false" >
              <div className={classes.inputDivs}>
               
                <input className={classes.InputFields} type="text" placeholder="Name" name ="name" id = "name"  draggable="false"></input>
              </div>
              <div>
              <input className={classes.InputFields}type="email" placeholder="Email" name="email"></input>
              </div>
              <div>
               <textarea className={classes.InputFields} placeholder="Your message" name ="message"></textarea>
              </div>
                <button type="submit"> {enquire ? <LoadingSpinner/> : "Submit"} </button>
            </form>
        </div>
        </div>
    
    );
}

export default Contact;