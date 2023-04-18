import React from 'react';
import {addPostAC, InitialStateType, onPostChangeAC, PostsType, ProfilePageType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export type MyPostPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapSateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        addPost: () => dispatch(addPostAC()),
        updateNewPostText: (text: string) =>
        {
            let action = onPostChangeAC(text)
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapSateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;