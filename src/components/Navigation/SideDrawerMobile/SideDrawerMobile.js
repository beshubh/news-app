import React from 'react';
import styles from './SideDrawerMobile.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
class SideDrawerMobile extends React.Component{
    state = {
        selectedCategory:'home',
    };
    handleOnOptionsClick =async (option)=>{
        const newCategory = option;
        await this.setState({selectedCategory:newCategory});
        console.log(option);
        console.log(this.state.selectedCategory);
        this.props.onOptionsClick(option);
    };
   render() {
       let attachedClasses = [styles.SideDrawerMobile, styles.Close];
       if(this.props.open){
           attachedClasses = [styles.SideDrawerMobile, styles.Open];
       }
       const links = (
           <>
           <li onClick={() =>this.handleOnOptionsClick('home')}>
               <p className={this.state.selectedCategory==='home'? styles.active:''}> Home</p></li>
               <li onClick={() =>this.handleOnOptionsClick('in')}>
               <p className={this.state.selectedCategory==='in'? styles.active:''}>India</p></li>
               <li onClick={() =>this.handleOnOptionsClick('tech')}>
               <p className={this.state.selectedCategory==='tech'? styles.active:''}>Tech</p></li>
               <li onClick={() =>this.handleOnOptionsClick('sports')}>
               <p className={this.state.selectedCategory==='sports'? styles.active:''}>Sports</p></li>
               <li onClick={() =>this.handleOnOptionsClick('bbc')}>
               <p className={this.state.selectedCategory==='bbc'? styles.active:''}>BBC</p></li>
               </>
               );

               return (
                       <>
                           <Backdrop show = {this.props.open} clicked = {this.props.closed}/>
                               <div className = {attachedClasses.join(' ')} onClick={this.props.closed}>
                               <nav>
                                   <ul>
                                       {links}
                                   </ul>
                               </nav>
                           </div>
                       </>
               );
   }
}
export default SideDrawerMobile;
