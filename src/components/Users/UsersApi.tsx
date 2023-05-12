import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import {UserType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from '../../assets/images/user-128.png'
import Users from "./Users";

class UsersApi extends React.Component<UsersPropsType, UserType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
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
            <Users
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
                setUsers={this.props.setUsers}
                totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
            />
        )
    }
}

export default UsersApi
