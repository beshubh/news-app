import  React from 'react';
import NewsList from '../NewsList/NewsList';
import SideBar from '../SideBar/SideBar';
import './Layout.css'
const Layout = ()=>{
        return(
            <div className='container'>
                <SideBar/>
                <NewsList/>
            </div>
        );
};
export default Layout;