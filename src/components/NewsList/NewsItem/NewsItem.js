import React from 'react';
import './NewsItem.css';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
class NewsItem extends React.Component{
    state={
        fullView:false,
    }
    handleOnViewClick=()=>{
      this.setState({fullView:true})
    };

    render() {
        let title = null;
        let desc = null;
        let content = null;
        let source = null;
        let imageUrl = null;
        let publishedAt = null;
        let url = null;
        if(this.props.loaded){
            title = this.props.title;
            desc = this.props.desc;
            content = this.props.content;
            source = this.props.source;
            imageUrl = this.props.imageUrl;
            publishedAt = this.props.publishedAt;
            url = this.props.url;

        }
        if(content){
            content = content.toString();
            content = content.substring(0,content.length-13);
        }
        publishedAt =publishedAt.toString();
        publishedAt = new Date(publishedAt);
        TimeAgo.addLocale(en);
        const timeAgo = new TimeAgo('en-US');
        publishedAt = timeAgo.format(publishedAt);
        const newsItemImage = <img src={imageUrl}
                                 alt={title}
                                 className={this.state.fullView?'newsItemImageFullView':'newsItemImage'}
                                />;
        let newsItem = (
            <div className='newsItem'>
                {newsItemImage}
                <div className="newsContainer">
                    <a target='_blank' href={url}><h5>
                        {title}
                    </h5>
                    </a>
                    <p className='desc'>{desc}</p>
                    <button onClick={this.handleOnViewClick}>View </button><br/>
                    <small className='sourceText'>{source} | {publishedAt}</small>
                </div>
            </div>
        );
        if(this.state.fullView){
            newsItem=(
                <div className='newsItem'>
                    {newsItemImage}
                    <div className="newsContainer">
                        <a target='_blank' href={url}><h5>
                            {title}
                        </h5>
                        </a>
                        <p className='desc'>{desc}</p>
                        <p>{content}</p>
                        <small className='sourceText'>{source} | {publishedAt}</small>
                    </div>
                </div>
            )
        }
        return(
            <React.Fragment>
                {newsItem}
            </React.Fragment>
        );
    }
}
export  default NewsItem;