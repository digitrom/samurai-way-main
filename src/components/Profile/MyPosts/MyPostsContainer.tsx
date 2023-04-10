import React from 'react';
import {ActionsTypes, PostsType} from "../../../redux/state";
import {addPostAC, onPostChangeAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type PropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
    dispatch: (action: ActionsTypes) => void
}



const MyPostsContainer = (props: PropsType) => {

    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    let onPostChange = (text: string) => {
        props.dispatch(onPostChangeAC(text))
    }


    return (<MyPosts posts={props.posts} newPostText={props.newPostText} addPost={addPost} updateNewPostText={onPostChange} />)
}

export default MyPosts;