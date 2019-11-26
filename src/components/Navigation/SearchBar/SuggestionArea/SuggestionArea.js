import React from 'react';
import styles from './SuggestionArea.module.css';
import BackDrop from '../../../UI/Backdrop/Backdrop';
const suggestionArea=(props)=>{
    let suggestionList = [];
    if(props.show){
        suggestionList = props.suggestionData.map((item,index)=>{
            return(
            <div key={index}>
                <p>{item.title}</p>
            </div>
            );
        });;
    }
    return(
        <div>
            {props.show?
            <React.Fragment>
            <div className={styles.suggestionArea}>
                <div className={styles.suggestionList}>
                    {suggestionList}
                </div>
            </div>
            <BackDrop show/>
            </React.Fragment>
        :null}
        </div>
    );
}
export default suggestionArea;