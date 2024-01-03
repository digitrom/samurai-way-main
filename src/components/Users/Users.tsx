import React from "react";
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
        <div>{
            props.users.map(el => <User user={el}
                                        followingInProgress={props.followingInProgress}
                                        follow={props.follow}
                                        unfollow={props.unfollow}
                                        key={el.id}/>)
        }</div>
    </div>

}

export default Users