import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostDataType} from "../../../index";


const MyPosts = (props:any) => {

    let postElements = props.posts.map((p:PostDataType) => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>New Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;