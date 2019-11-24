import React from 'react';
import NewsItem from './NewsItem/NewsItem';
import './NewsList.css';
class NewsList extends React.Component{
    render() {
        let newsToRender=<p style={{
            marginTop:"50vh",
            marginLeft:'50vh',
            marginRight:'50vh',
            marginBottom:'50vh',

            alignSelf:"center",
        }}>Loading...</p>;
        if (this.props.loaded) {
             newsToRender = this.props.newsList.map((news) => {
                return <NewsItem
                    loaded={this.props.loaded}
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
            <div>
                <section className='newsListContainer'>
                    <>
                    {newsToRender}
                    </>
                    </section>
            </div>
        );
    }
}
export  default NewsList;