import classes from "./ContextMenu.module.css";
import { useDispatch } from "react-redux";
import { appActions } from "../../store/AppSlice";

const ContextMenu = (props) => {
  const dispatch = useDispatch();


  const Items = [
    {
      id: 1,
      name: "View",
      sign: ">",
    },
    {
      id: 2,
      name: "Sort by",
    },
    {
      id: 3,
      name: "Refresh",
    },
    {
      id: 4,
      name: "Paste",
    },
    {
      id: 5,
      name: "Paste shortcut",
    },
    {
      id: 6,
      name: "New",
      sign: ">",
    },
    {
      id: 7,
      name: "Personalize Settings",
    },
    {
      id: 8,
      name: "Display Settings",
    },
  ];

  const refreshHandler = (id) => {
    if (id === 3) {
      window.location.reload();
    }
    if(id===7){
      
      dispatch(appActions.personalizeOpened(true))
    
    }
  };

  return (
    <div className={classes.containerContextMenu} style={props.style}>
      {Items.map((item) => (
        <span
          key={item.id}
          className={classes.actionholder}
          onClick={() => refreshHandler(item.id)}
        >
          {item.name} <div>{item.sign}</div>
        </span>
      ))}
    </div>
  );
};
export default ContextMenu;
