import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfilePageType, ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

export type ProfileInfoPropsType = {
    profile: ProfileType | null
}

const ProfileInfo = (props:ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader />
    }
    // debugger
    return (
        <div>
            <div className='content img'>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <ProfileStatus status={'Hey man'}/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;