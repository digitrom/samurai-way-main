import React from "react";
import {connect, useDispatch} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    unfollow,
    UserType, toggleIsFollowingInProgress, getUserThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

export type MapStateToPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}
// const dispatch = useUsersDispatch();

export type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFollowingInProgress: (followingInProgress: boolean, userId:string) => void
    getUserThunkCreator: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersPropsType, UserType> {
    componentDidMount() {
        this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage: number) => {
    this.props.getUserThunkCreator(currentPage, this.props.pageSize)
    }

    render() {
        // debugger
        return (
            <>
                { this.props.isFetching ? <Preloader/> : ''  }
                <Users
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
                toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
                followingInProgress = {this.props.followingInProgress}
            />
            </>
        )
    }
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default  connect(mapStateToProps, {
    follow, unfollow,
    setCurrentPage,
    toggleIsFollowingInProgress, getUserThunkCreator
})(UsersContainer)






