import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>New Post</button>
                </div>
                <div className={s.posts}>
                    <Post message='Привет, у меня все хорошо' likesCount={121}/>
                    <Post message='День был очень насыщенный' likesCount={64}/>
                </div>
            </div>
    );
}

export default MyPosts;