import  React from 'react';
import NewsList from '../NewsList/NewsList';
import SideBar from '../Navigation/SideBar/SideBar';
import './Layout.css'
import axios from "axios";

import Category from '../NewsList/Category/Category';
import SideDrawerMobile from '../Navigation/SideDrawerMobile/SideDrawerMobile';
import NavBar from '../Navigation/NavBar';


const API_KEY = 'eb6408d7171b409980b3d243ec54c9aa';
const topHeadlines = 'https://newsapi.org/v2/top-headlines?';
const apiKey = 'apiKey='+API_KEY;

class Layout extends React.Component{
    state ={
        newsList:null,
        loaded:false,
        category:'Headlines',
        showSideDrawerMobile:false,
    };
    componentDidMount() {
        //display news for google news for homepage other categories from props
        this.getInitialNews();
    }
    getInitialNews=()=>{
        this.setState({category:'Headlines'});
        let url = topHeadlines +
            'sources=google-news&'+
            apiKey;
        axios.get(url).then((response)=>{
            const newsList = response.data.articles;
            this.setState({newsList:newsList,loaded:true,category:'Headlines'});
        }).catch((error)=>{
            console.log(error);
        });
    };
    getIndiaTopHeadlines=()=>{
        this.setState({category:'India'});
        let url = topHeadlines +
            'country=in&'+
            apiKey;
        axios.get(url).then((response)=>{
            const newsList = response.data.articles;
            this.setState({newsList:newsList,loaded:true,category:'India'});
        }).catch((error)=>{
            console.log(error);
        });
    };
    getCategoricalNews =(category)=>{
        let url = topHeadlines +
            'country=in&'+
            'category='+ category+'&'+
            apiKey;
        let cat=null;
        if(category==='technology'){
            cat = 'Technology';
        }
        else if(category==='sports'){
            cat = 'Sports'
        }
        this.setState({category:cat});
        axios.get(url).then((response)=>{
            const newsList = response.data.articles;

            this.setState({newsList:newsList,loaded:true,category:cat});
        }).catch((error)=>{
            console.log(error);
        });
    };
    getNewsFromSource =(source)=>{
        this.setState({category:'BBC'});
        let url = topHeadlines +
            'sources='+source +'&'+
            apiKey;
        axios.get(url).then((response)=>{
            const newsList = response.data.articles;
            this.setState({newsList:newsList,loaded:true,category:'BBC'});
        }).catch((error)=>{
            console.log(error);
        });
    };
    handleOnOptionClick =(option)=>{
        this.setState({loaded:false});
        if(option === 'home'){
            this.getInitialNews();
        }
        if(option === 'in'){
            this.getIndiaTopHeadlines();
        }
        if(option=== 'tech'){
            this.getCategoricalNews('technology');
        }
        if(option === 'sports'){
            this.getCategoricalNews('sports');
        }
        if(option === 'bbc'){
            this.getNewsFromSource('bbc-news');
        }
    };
    searchBarChanged =(event)=>{
        event.preventDefault();
    };
    sideDrawerToggleHandler = ()=>{
        const updatedShowSideDrawer = !this.state.showSideDrawerMobile;
        this.setState({
            showSideDrawerMobile:updatedShowSideDrawer,
        });
    };
    sideDrawerClosedHandler = ()=>{

        this.setState({
            showSideDrawerMobile:false,
        });
    };
    render() {
           return(
               <div className='container'>
                   <NavBar
                       category={this.state.category}
                       drawerToggleClicked={this.sideDrawerToggleHandler}
                       onOptionsClick ={(option)=> this.handleOnOptionClick(option)}
                   />
                   <SideDrawerMobile
                       onOptionsClick ={(option)=> this.handleOnOptionClick(option)}
                       category={this.state.category}
                       open = {this.state.showSideDrawerMobile}
                       closed = {this.sideDrawerClosedHandler}
                   />
                   <Category category={this.state.category} />
                   <NewsList newsList = {this.state.newsList}
                             category={this.state.category}
                             loaded={this.state.loaded}/>
               </div>
           );
       }
};
export default Layout;