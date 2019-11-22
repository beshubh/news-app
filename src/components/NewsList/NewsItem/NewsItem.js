import React from 'react';
import './NewsItem.css';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
const newsItem =(props)=>{
    let title = null;
    let desc = null;
    let content = null;
    let source = null;
    let imageUrl = null;
    let publishedAt = null;
    let url = null;
    if(props.loaded){
        title = props.title;
        desc = props.desc;
        content = props.content;
        source = props.source;
        imageUrl = props.imageUrl;
        publishedAt = props.publishedAt;
        url = props.url;

    }
    publishedAt =publishedAt.toString();
    publishedAt = new Date(publishedAt);
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    publishedAt = timeAgo.format(publishedAt);
    console.log(publishedAt);
    return(
        <div className='newsItem'>
            <img src={imageUrl}
                 alt={title}
                 style={{
                     width:'150px',
                     height:'150px',
                     top:'0',
                     right:'0',
                     float:'right',
                     borderRadius:'10px',
                 }}
            />

                <div className="newsContainer">
                <a target='_blank' href={url}><h5>
                    {title}
                </h5>
                </a>
                    <p className='desc'>{desc}</p>
                 <small className='sourceText'>{source} | {publishedAt}</small>
                </div>
        </div>
    );
};
export  default newsItem;