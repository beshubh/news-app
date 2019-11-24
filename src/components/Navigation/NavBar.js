import React from 'react';
import DrawerToggle from '../Navigation/DrawerToggle/DrawerToggle';
import SideBar from "./SideBar/SideBar";
import classes from './NabBar.module.css';
import Category from "../NewsList/Category/Category";
const navBar=(props)=>{
    return(
        <div className={classes.NavBar}>
            <DrawerToggle clicked = {props.drawerToggleClicked}/>
            <SideBar onOptionsClick ={(option)=> props.onOptionsClick(option)}/>
        </div>
    );
};
export default navBar;