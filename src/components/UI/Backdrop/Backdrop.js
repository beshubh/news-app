import React from "react";
import "./Backdrop.css";
const backDrop = props => {
    return props.show ? <div className='Backdrop' onClick ={props.clicked}></div> : null;
};
export default backDrop;
