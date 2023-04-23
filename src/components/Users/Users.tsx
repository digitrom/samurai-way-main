import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'

const Users = (props: UsersPropsType) => {
    return <div>
        {
            props.users.map(el => <div key={el.id}>
<span>
    <div>
        <img src={el.photoUrl} className={styles.userPhoto}/>
    </div>
    <div>
        {el.followed
            ? <button onClick={()=> {props.unfollow(el.id)}}>Unfollow</button>
        : <button onClick={()=> {props.follow(el.id)}}>Follow</button>}
    </div>
</span>
<span>
    <span>
        <div>{el.fullName}</div>
        <div>{el.status}</div>
    </span>
    <span>
        <div>{el.location.country}</div>
        <div>{el.location.city}</div>
    </span>
</span>
            </div>)
        }
    </div>

}

export default Users




