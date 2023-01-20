import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type PostDataType = {
    id: number
    message: string
    likesCount: number
}

const MyPosts = () => {
    let postData: Array<PostDataType> = [
        {
            id: 1,
            message: "Hey you",
            likesCount: 121
        },
        {
            id: 2,
            message: "How are You",
            likesCount: 64
        }
    ]


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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;