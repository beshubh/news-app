import React,{Component} from 'react';
import classes from './SearchBar.module.css';
import SuggestionArea from './SuggestionArea/SuggestionArea';
import axios from "axios";
import {apiKey} from '../../Layout/Layout';
const everyThing = 'https://newsapi.org/v2/everything?';
class SearchBar extends Component{
    state = {
        suggestionData:null,
        showSuggestions:false,
        query:'',
        category:'blalbla',
    };
    searchBarChangedHandler=async(event)=>{
        const searchText = event.target.value;
        await this.setState({query:searchText});
        let newState = null;
        if(this.state.query === ''){
            console.log('0')
            newState = {
                showSuggestions:false,
                suggestionData:null,
            };
            this.setState(newState);
        }
        else{
            if(this.state.query.length>=5){
                let url = everyThing +
                'q='+this.state.query+'&'+
                'sortBy=publishedAt&'+
                apiKey;
            console.log('requesting');
            axios.get(url).then((response)=>{
                const newsList = response.data.articles;
                this.setState({suggestionData:newsList,showSuggestions:true,category:'Headlines'});
                if(this.state.query===''){
                    this.setState({showSuggestions:false})
                }
            }).catch((error)=>{
                console.log(error);
            });
            }
        }
    }
    backdropClicked=()=>{
        console.log('backdrop');
        this.setState({showSuggestions:false});
    }
    searchSubmitHandler=(event,query)=>{
        event.preventDefault();
        const newState = {
            showSuggestions:false,
            query:'',
            suggestionData:null,
        }
        this.setState(newState);
        console.log('searchSubHandler',query);
        this.props.newsUsingSearch(query);
    }
    render(){
        return(
            <div className={classes.search}>
                <form onSubmit={(event)=>this.searchSubmitHandler(event,this.state.query)}>
                <input onChange={this.searchBarChangedHandler} className={classes.input} placeholder='Search' value={this.state.query}/>
                </form>
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