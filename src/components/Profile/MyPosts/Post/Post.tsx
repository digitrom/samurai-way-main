import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
    likesCount: number
}

const Post = (props: PropsType) => {
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