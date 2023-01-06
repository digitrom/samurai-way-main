import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://elcritico.com.ar/wp-content/uploads/2020/12/AVA-POSTER.jpg'/>
            Post 1
           <div>
               <span>like </span>
           </div>
        </div>
    );
}

export default Post;