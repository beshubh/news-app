import React from 'react';
import axios from 'axios';
import NewsItem from './NewsItem/NewsItem';
import './NewsList.css';
class NewsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newsList : null,
            loaded:false,
        }
    }
    componentDidMount() {
        const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=eb6408d7171b409980b3d243ec54c9aa';
        axios.get(url).then((response)=>{
            const newsList = response.data.articles;
            this.setState({newsList:newsList,loaded:true});
        }).catch((error)=>{
                console.log(error);
        });
    }

    render() {
        let newsToRender = [];
        if(this.state.loaded) {
            newsToRender = this.state.newsList.map((news)=>{
                return <NewsItem
                    loaded = {this.state.loaded}
                    imageUrl = {news.urlToImage}
                    source = {news.source.name}
                    key = {news.title}
                    title = {news.title}
                    desc = {news.description}
                    content = {news.content}
                    publishedAt = {news.publishedAt}
                    url = {news.url}
                />;
            })

        }
        else {
        newsToRender = <p>Loading....</p>;
        }

        return (
            <div>
                <section className='newsListContainer'>{newsToRender}</section>
            </div>
        );
    }
}
export  default NewsList;