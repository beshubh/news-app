import  React from 'react';
import './Category.css';
const category=(props)=>{
    return(
        <div className='category'>
            {props.category}
        </div>
    );
};
export default category;