import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type PropsType ={
    profilePage: ProfilePageType
    // addPost: (newPostText: string) => void
    dispatch: (action: ActionsTypes) => void
    // updateNewPostText: (newText: string | undefined) => void

}

const Profile = (props:PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
                // updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;