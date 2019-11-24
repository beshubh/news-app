import React from 'react';
import './SideBar.css';
import {Link, NavLink} from "react-router-dom";
class SideBar extends React.Component{
    handleOnOptionsClick =(option)=>{
      this.props.onOptionsClick(option);
    };
    render() {
        const homeParams ={
            pathname:'/news-app/in',
        };
        const techParams = {
            pathname: '/news-app/technology',
        };
        const sportsParams = {
            pathname: '/news-app/sports',

        };
        const bbcParams = {
            pathname: '/news-app/bbc',
        };

        return(
            <div className='SideBar'>
                <nav>
                    <ul>
                        <li onClick={() =>this.handleOnOptionsClick('home')}>
                            <NavLink to={{pathname:'/news-app',state:'home'}} exact> Home</NavLink></li>
                        <li onClick={() =>this.handleOnOptionsClick('in')}>
                            <NavLink to={homeParams}>India</NavLink></li>
                        <li onClick={() =>this.handleOnOptionsClick('tech')}>
                            <NavLink to={techParams}>Tech</NavLink></li>
                        <li onClick={() =>this.handleOnOptionsClick('sports')}>
                            <NavLink to={sportsParams}>Sports</NavLink></li>
                        <li onClick={() =>this.handleOnOptionsClick('bbc')}>
                            <NavLink to={bbcParams}>BBC</NavLink></li>

                    </ul>
                </nav>
            </div>
        );
    }
}
export  default SideBar;