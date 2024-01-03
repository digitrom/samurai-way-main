import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user-128.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {UserType} from "../../api/api";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type UsersPropsType1 = {
    onPageChanged: (currentPage: number) => void
    follow: (userId: string) => void
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

    return <div>
        <Paginator
            currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
        />
        {
            props.users.map(el => <User user={el}
                                        followingInProgress={props.followingInProgress}
                                        follow={props.follow}
                                        unfollow={props.follow}
                                        key={el.id}/>)
        }
    </div>

}

export default Users