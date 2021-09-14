import classes from './DateHolder.module.css';

const DateLanguageHolder = (props) =>{
    return (<div className={classes["logo_container-windows_again"]}>
        {props.children}
    </div>);
}

export default DateLanguageHolder;