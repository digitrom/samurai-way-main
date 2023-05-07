import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import {UserType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from '../../assets/images/user-128.png'

class Users extends React.Component<UsersPropsType, UserType> {
    constructor(props:UsersPropsType) {
        super(props);
        alert("NEW")
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            // debugger
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return <div>
            {
                this.props.users.map(el => <div key={el.id}>
<span>
    <div>
        <img src={el.photos.small !== null ? el.photos.small : userPhoto} className={styles.userPhoto}/>
    </div>
    <div>
        {el.followed
            ? <button onClick={() => {
                this.props.unfollow(el.id)
            }}>Unfollow</button>
            : <button onClick={() => {
                this.props.follow(el.id)
            }}>Follow</button>}
    </div>
</span>
                    <span>
    <span>
        <div>{el.name}</div>
        <div>{el.status}</div>
    </span>
    <span>
        <div>{'el.location.country'}</div>
        <div>{'el.location.city'}</div>
    </span>
</span>
                </div>)
            }
        </div>
    }
}

export default Users
