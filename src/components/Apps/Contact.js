import classes from './Contact.module.css'
import Modal from '../UI/Modal';
import emailjs from 'emailjs-com';
const Contact = () =>{
    const onSubmitHandler = (e)=>{
        e.preventDefault();

        emailjs.sendForm( process.env.REACT_APP_MY_SERVICE_ID, process.env.REACT_APP_MY_TEMPLATE_ID, e.target, process.env.REACT_APP_MY_USER_ID )
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    
    }
  
    return (
       <Modal>
            <div className={classes.Container}>
            <form onSubmit={onSubmitHandler}>
              <div>
              <input type="text" placeholder="name" name ="name"></input>
              </div>
              <div>
              <input type="email" placeholder="email" name="email"></input>
              </div>
              <div>
               <textarea placeholder="yor message" name ="message"></textarea>
              </div>
                <button type="submit"> Submit </button>
            </form>
        </div>
       </Modal>
    );
}

export default Contact;