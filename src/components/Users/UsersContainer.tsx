import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    getUserThunkCreator,
    setCurrentPage,
    toggleIsFollowingInProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {UserType} from "../../api/api";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

export type MapStateToPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}

export type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFollowingInProgress: (followingInProgress: boolean, userId:string) => void
    getUserThunkCreator: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersPropsType, UserType> {
    componentDidMount() {
        const  {currentPage, pageSize} = this.props
        this.props.getUserThunkCreator(currentPage, pageSize)
    }

    onPageChanged = (currentPage: number) => {
        const  {pageSize} = this.props
    this.props.getUserThunkCreator(currentPage, pageSize)
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

// const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         users: state.usersPage.users,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         pageSize: state.usersPage.pageSize,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow,
        setCurrentPage,
        toggleIsFollowingInProgress, getUserThunkCreator}),
    // withAuthRedirect
)(UsersContainer)





