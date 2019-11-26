import  React from 'react';
import NewsList from '../NewsList/NewsList';
import './Layout.css'
import axios from "axios";
import ResponsiveDrawer from "../Navigation/ResponsiveNavBar/ResponsiveNavBar";

export const API_KEY = 'eb6408d7171b409980b3d243ec54c9aa';
export const topHeadlines = 'https://newsapi.org/v2/top-headlines?';
export const apiKey = 'apiKey='+API_KEY;

class Layout extends React.Component{
    state ={
        newsList:null,
        loaded:false,
        category:'Headlines',
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
        console.log(option);
        this.setState({loaded:false});
        if(option === 'Home'){
            this.getInitialNews();
        }
        if(option === 'India'){
            this.getIndiaTopHeadlines();
        }
        if(option=== 'Tech'){
            this.getCategoricalNews('technology');
        }
        if(option === 'Sports'){
            this.getCategoricalNews('sports');
        }
        if(option === 'BBC'){
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
                   {/*<NavBar*/}
                   {/*    category={this.state.category}*/}
                   {/*    drawerToggleClicked={this.sideDrawerToggleHandler}*/}
                   {/*    onOptionsClick ={(option)=> this.handleOnOptionClick(option)}*/}
                   {/*/>*/}
                   {/*<SideDrawerMobile*/}
                   {/*    onOptionsClick ={(option)=> this.handleOnOptionClick(option)}*/}
                   {/*    category={this.state.category}*/}
                   {/*    open = {this.state.showSideDrawerMobile}*/}
                   {/*    closed = {this.sideDrawerClosedHandler}*/}
                   {/*/>*/}
                   {/*<Category category={this.state.category} />*/}
                   <ResponsiveDrawer
                       category={this.state.category}
                       onOptionsClick ={(option)=> this.handleOnOptionClick(option)}

                   />
                   <NewsList newsList = {this.state.newsList}
                             category={this.state.category}
                             loaded={this.state.loaded}/>

               </div>
           );
       }
};
export default Layout;