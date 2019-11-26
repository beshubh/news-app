import React from 'react';
import './NewsItem.css';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import clsx from 'clsx';
import { Card,  CardMedia, Typography,Collapse,CardContent} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
    card: {
        alignContent: 'start',
        textAlign: 'start',
        position:'relative',
        margin:10,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
export default function newsItem(props){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
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
    if(content){
        content = content.toString();
        content = content.substring(0,content.length-13);
    }
    publishedAt =publishedAt.toString();
    publishedAt = new Date(publishedAt);
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    publishedAt = timeAgo.format(publishedAt);
    const newsItemImage = (
        <CardMedia
            component="img"
            alt={title}
            height="400"
            image={imageUrl}
            title={title}
        />
    );
    let newsItem = (
            <Card className={classes.card}>
                <CardContent style={{padding:10,}}>
                    {newsItemImage}
                    <Typography align='start' gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography component='p'>{desc?desc.toString().substring(0,100):''}...</Typography>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                    <small className='sourceText'>{source} | {publishedAt}</small>
                </CardContent>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {content}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
    );
    return(
        <React.Fragment>
            {newsItem}
        </React.Fragment>
    );
}

