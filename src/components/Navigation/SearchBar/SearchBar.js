import React,{Component} from 'react';
import classes from './SearchBar.module.css';
import SuggestionArea from './SuggestionArea/SuggestionArea';
import axios from "axios";
import {apiKey} from '../../Layout/Layout';
const everyThing = 'https://newsapi.org/v2/everything?';
// 'https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=eb6408d7171b409980b3d243ec54c9aa'
class SearchBar extends Component{
    state = {
        suggestionData:null,
        showSuggestions:false,
        category:'blalbla',
    };
    searchBarChangedHandler=(event)=>{
        const searchText = event.target.value;
        console.log(typeof searchText)
        let newState = null;
        if(searchText=== ''){
            console.log('0')
            newState = {
                showSuggestions:false,
                suggestionData:null,
            };
            this.setState(newState);
        }
        else{
            let url = everyThing +
                'q='+searchText+'&'+
                'sortBy=publishedAt&'+
                apiKey;
            console.log(url);
            axios.get(url).then((response)=>{
                const newsList = response.data.articles;
                this.setState({suggestionData:newsList,showSuggestions:true,category:'Headlines'});
            }).catch((error)=>{
                console.log(error);
            });
        }
    }
    backdropClicked=()=>{
        this.setState({showSuggestions:false});
    }
    render(){
        return(
            <div className={classes.search}>
                <input onChange={this.searchBarChangedHandler} className={classes.input} placeholder='Search'/>
                <SuggestionArea
                 show = {this.state.showSuggestions} 
                 suggestionData = {this.state.suggestionData}
                 backdropClicked={this.backdropClicked}
                 />
                
            </div>
        );
    }
}
export default SearchBar;