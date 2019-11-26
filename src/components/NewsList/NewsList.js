import React from 'react';
import NewsItem from './NewsItem/NewsItem';
import './NewsList.css';
import Spinner from '../UI/Spinner/Spinner';

export default function newsList(props){
    let newsToRender=<div style={{
        marginTop:"50vh",
        marginLeft:'50vh',
        marginRight:'50vh',
        marginBottom:'50vh',

        alignSelf:"center",
    }}>
        <Spinner/>
    </div>;
    if (props.loaded) {
         newsToRender = props.newsList.map((news) => {
            return <NewsItem
                loaded={props.loaded}
                imageUrl={news.urlToImage}
                source={news.source.name}
                key={news.title}
                title={news.title}
                desc={news.description}
                content={news.content}
                publishedAt={news.publishedAt}
                url={news.url}

            />;
        });
    }
    return (
        <main>
            <div>
                <br></br>
                <br></br>

                {newsToRender}
            </div>
        </main>
    );
}