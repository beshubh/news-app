import React,{Component} from 'react';
import classes from './SearchBar.module.css';
import {Card,CardActionArea,Typography} from '@material-ui/core'
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            suggestionIsHidden:true,
            suggestionText:null,
        }
    }
    searchBarChangedHandler=(event)=>{
        const searchText = event.target.value;
        const newState = {
            suggestionText:searchText,
            suggestionIsHidden:false
        };
        this.setState(newState);
        console.log(searchText);
    }
    render(){
        let suggestions = (
            <Card>
                <CardActionArea>
                    <Typography variant='h5'>
                        {this.state.suggestionText}
                    </Typography>
                </CardActionArea>
            </Card>
        )
        return(
            <div className={classes.search}>
                <input onChange={this.searchBarChangedHandler} className={classes.input} placeholder='Search'/>
                {/* {this.state.suggestionIsHidden?null:suggestions} */}
            </div>
        );
    }
}
export default SearchBar;