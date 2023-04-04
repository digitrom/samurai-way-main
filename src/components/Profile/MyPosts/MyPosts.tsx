import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, onPostChangeAC, PostsType} from "../../../redux/state";


type PropsType = {
    posts: Array<PostsType>
    newPostText: string
    // addPost: (newPostText: string) => void
    // updateNewPostText: (newText: string | undefined) => void
    dispatch: (action: ActionsTypes) => void
}



const MyPosts = (props: PropsType) => {

    let postElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    // let newPostElement = React.createRef<HTMLTextAreaElement>();// не явная типизация


    let addPost = () => {
        // debugger
        // let action = {type : "ADD-POST", newPostText: props.newPostText }
        props.dispatch(addPostAC(props.newPostText))
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // let text = newPostElement.current?.value;
        // props.updateNewPostText(e.currentTarget.value)
        props.dispatch(onPostChangeAC(e.currentTarget.value))
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        // ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}>New Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;