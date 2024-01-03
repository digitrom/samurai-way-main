import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user-128.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {UserType} from "../../api/api";
import Paginator from "../common/Paginator/Paginator";


// type UsersPropsType2 = {
//     user: UserType
//     followingInProgress: Array<string>
//     follow: (userId: string)  => void
//     unfollow: (userId: string) => void
// }

const User = ({user, followingInProgress, follow, unfollow}:{user:UserType, followingInProgress: Array<string>,  
    follow: (userId: string)  => void,  unfollow: (userId: string) => void}) => {

    return (
        <div>
<span>
    <div>
        <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
    </NavLink>
        </div>

    <div>
        {user.followed
            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                follow(user.id)
            }}>Unfollow</button>
            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                unfollow(user.id)
            }}>Follow</button>}
    </div>
</span>
            <span>
    <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
    </span>
    <span>
        <div>{'user.location.country'}</div>
        <div>{'user.location.city'}</div>
    </span>
</span>
        </div>)
}

export default User