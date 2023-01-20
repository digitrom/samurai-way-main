import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type PostDataType = {
    id: number
    message: string
    likesCount: number
}

const MyPosts = () => {
    let posts: Array<PostDataType> = [
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

    let postElements = posts.map((p:PostDataType) => <Post message={p.message} likesCount={p.likesCount}/>)


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