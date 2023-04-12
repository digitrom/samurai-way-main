import React from 'react';
import {ActionsTypes, PostsType, StoreType} from "../../../redux/state";
import {addPostAC, onPostChangeAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type PropsType = {
    store: StoreType;
    newPostText: string
}

export const MyPostsContainer = (props: PropsType) => {
    let state = props.store.getState().profilePage

    let addPost = () => {
        props.store.dispatch(addPostAC(props.newPostText))
    }

    let onPostChange = (text: string) => {
        props.store.dispatch(onPostChangeAC(text))
    }


    return (<MyPosts
        posts={state.posts}
        newPostText={state.newPostText}
        addPost={addPost}
        updateNewPostText={onPostChange} />)
}

export default MyPostsContainer;