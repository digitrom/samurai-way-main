import React from 'react';
import {addPostAC,  PostsType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: Array<PostsType>
}

type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

export type MyPostPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapSateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }

}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        addPost: (newPostText) => dispatch(addPostAC(newPostText)),
    }
}

const MyPostsContainer = connect(mapSateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;