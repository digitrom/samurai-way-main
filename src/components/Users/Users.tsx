import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user-128.png";
import React from "react";
import {toggleIsFollowingInProgress, UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType1 = {
    onPageChanged: (currentPage: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    users: UserType[]
    toggleIsFollowingInProgress: (followingInProgress: boolean) => void
    followingInProgress: boolean
}

const Users = (props: UsersPropsType1) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
                // <span className={true ? styles.selectedPage : ''}>{p}</span>
            })}
        </div>
        {
            props.users.map(el => <div key={el.id}>
<span>
    <div>
        <NavLink to={'/profile/' + el.id}>
            <img src={el.photos.small !== null ? el.photos.small : userPhoto} className={styles.userPhoto}/>
    </NavLink>
        </div>

    <div>
        {el.followed
            ? <button disabled={props.followingInProgress} onClick={() => {
                props.toggleIsFollowingInProgress(true)
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                    withCredentials: true,
                    headers: {
                        'API-KEY':'bf9b2fdb-0844-4b4a-9eec-962dd771a951'}
                },  )
                    .then(response => {
                        if (response.data.resultCode === 0) {
                            props.unfollow(el.id)
                        }
                        props.toggleIsFollowingInProgress(false)
                    })
            }}>Unfollow</button>
            : <button disabled={props.followingInProgress} onClick={() => {
                props.toggleIsFollowingInProgress(true)
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                    withCredentials: true,
                    headers: {
                        'API-KEY':'bf9b2fdb-0844-4b4a-9eec-962dd771a951'
                    }
                })
                    .then(response => {
                        if (response.data.resultCode === 0) {
                            props.follow(el.id)
                        }
                        props.toggleIsFollowingInProgress(false)
                    })
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

export default Users