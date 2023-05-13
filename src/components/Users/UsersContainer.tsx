import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    isFetchingAC,
    UserType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import preloader from "../../assets/images/preloader.gif"

export type MapStateToPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}

export type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number )=> void
    toggleIsFetching: (isFetching: boolean )=> void
}

class UsersContainer extends React.Component<UsersPropsType, UserType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)

        })
    }

    render() {
        return (
            <>
                { this.props.isFetching ? <img src={preloader} /> : ''  }
                <Users
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
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
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => dispatch(followAC(userId)),
        unfollow: (userId: string) => dispatch(unfollowAC(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number )=> dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalUsersCount: number )=> dispatch(setTotalUsersCountAC(totalUsersCount)),
        toggleIsFetching: (isFetching : boolean) => dispatch(isFetchingAC(isFetching))
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(UsersContainer)






