import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import {UserType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from '../../assets/images/user-128.png'

class Users extends React.Component<UsersPropsType, UserType> {
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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(p => {
                 return  <span  className={this.props.currentPage === p ? styles.selectedPage: ''}
                                onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                    // <span className={true ? styles.selectedPage : ''}>{p}</span>
                })}
            </div>
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
