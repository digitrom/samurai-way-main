import React from 'react';
import s from './Post.module.css';

const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img src='https://elcritico.com.ar/wp-content/uploads/2020/12/AVA-POSTER.jpg'/>
            {props.message}
            <div>
                <span>likes</span> { props.likesCount }
            </div>
        </div>
    );
}

export default Post;