import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user-128.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {UserType} from "../../api/api";

type UsersPropsType1 = {
    onPageChanged: (currentPage: number) => void
    follow: (userId: string)  => void
    unfollow: (userId: string) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
    users: UserType[]
    toggleIsFollowingInProgress: (isFetching: boolean, userID: string) => void
    followingInProgress: Array<string>
}

const Users = (props: UsersPropsType1) => {

    // const dispatch = useDispatch<UsersDispatchType>()
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
            ? <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                props.follow(el.id)
            }}>Unfollow</button>
            : <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                props.unfollow(el.id)
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