import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type PropsType ={
    store: StoreType
}

const Profile = (props:PropsType) => {

    let state = props.store.getState().profilePage
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
               store={props.store}
               newPostText={state.newPostText}
            />
        </div>
    );
}

export default Profile;