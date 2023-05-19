import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfilePageType} from "../../../redux/profile-reducer";

export type ProfileInfoPropsType = {
    profile: ProfilePageType
}

const ProfileInfo = (props:ProfileInfoPropsType) => {
    return (
        <div>
            <div className='content img'>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.profile.photo.large}/>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;