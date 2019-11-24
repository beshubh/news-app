import React from 'react';
import './SideBar.css';
import DrawerToggle from '../DrawerToggle/DrawerToggle';
class SideBar extends React.Component{
    state = {
        selectedCategory:'home',
    };
    handleOnOptionsClick =(option)=>{
        this.setState({selectedCategory:option});
        this.props.onOptionsClick(option);
    };
    render() {
        let links = (
            <>
            <li onClick={() =>this.handleOnOptionsClick('home')}>
                <p className={this.state.selectedCategory==='home'? 'active':''}> Home</p></li>
            <li onClick={() =>this.handleOnOptionsClick('in')}>
                <p className={this.state.selectedCategory==='in'? 'active':''}>India</p></li>
            <li onClick={() =>this.handleOnOptionsClick('tech')}>
                <p className={this.state.selectedCategory==='tech'? 'active':''}>Tech</p></li>
            <li onClick={() =>this.handleOnOptionsClick('sports')}>
                <p className={this.state.selectedCategory==='sports'? 'active':''}>Sports</p></li>
            <li onClick={() =>this.handleOnOptionsClick('bbc')}>
                <p className={this.state.selectedCategory==='bbc'? 'active':''}>BBC</p></li>
                </>
        );
        return(
            <div className='SideBar'>
                <DrawerToggle clicked={this.props.drawerToggleClicked}/>
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