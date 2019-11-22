import React from 'react';
import './SideBar.css';
class SideBar extends React.Component{
    render() {
        return(
            <div className='SideBar'>
                sidebar
                <nav>
                    <ul>
                        <li>Technology</li>
                        <li>Sports</li>
                        <li>India</li>
                        <li>World</li>

                    </ul>
                </nav>
            </div>
        );
    }
}
export  default SideBar;