import classes from './iconholder.module.css';
const IconHolder = (props)=>{

    return(
        <div className={classes["logo_container-windows"]}> {props.children}</div>
    );
};


export default IconHolder;