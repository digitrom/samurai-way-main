import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import {UserType} from "../../redux/users-reducer";

const Users = (props: UsersPropsType) => {
if (props.users.length === 0)
    props.setUsers([
        {
            id: '1',
            photoUrl: 'https://avatarfiles.alphacoders.com/196/196653.jpg',
            followed: true,
            fullName: "Roma",
            status: 'I am a father',
            location: {country: 'Poland', city: 'Warsaw'}
        },
        {
            id: '2',
            photoUrl: 'https://avatarfiles.alphacoders.com/196/196653.jpg',
            followed: false,
            fullName: "Sasha",
            status: 'I am a friend',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: '3',
            photoUrl: 'https://avatarfiles.alphacoders.com/196/196653.jpg',
            followed: true,
            fullName: "Dima",
            status: 'I am a brother',
            location: {country: 'Belarus', city: 'Vozera'}
        }
    ] as Array<UserType>)
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




