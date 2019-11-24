import React from 'react';
import './SideBar.css';
class SideBar extends React.Component{
    handleOnOptionsClick =(option)=>{
      this.props.onOptionsClick(option);
    };
    render() {
        let classes = '';
        let links = (
            <>
            <li onClick={() =>this.handleOnOptionsClick('home')}>
                <p> Home</p></li>
            <li onClick={() =>this.handleOnOptionsClick('in')}>
                <p>India</p></li>
            <li onClick={() =>this.handleOnOptionsClick('tech')}>
                <p>Tech</p></li>
            <li onClick={() =>this.handleOnOptionsClick('sports')}>
                <p>Sports</p></li>
            <li onClick={() =>this.handleOnOptionsClick('bbc')}>
                <p className={classes}>BBC</p></li>
                </>
        );
        return(
            <div className='SideBar'>
                <nav>
                    <ul>
                        {links}
                    </ul>
                </nav>
            </div>
        );
    }
}
export  default SideBar;