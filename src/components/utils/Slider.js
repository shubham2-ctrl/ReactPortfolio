import classes from './Slider.module.css'
import {Drawer} from 'antd';

const Slider =(props)=>{

    return<>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        visible={props.visible}
        
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

    </>;
};

export default Slider;