import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePageType, ProfileType} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";
import ProfileStatus from "./ProfileInfo/ProfileStatus";

type ProfilePropsType = {
    profile: ProfileType | null
}

const Profile = (props :ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;