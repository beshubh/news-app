import React from 'react';
class SearchBar extends React.Component{
    render() {
        return(
            <input className='searchBar' onChange={this.props.searchBarChanged}/>
        );
    }
}
export  default SearchBar;