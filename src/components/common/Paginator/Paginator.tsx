import styles from "./Paginator.module.css";
import React from "react";

type UsersPropsType1 = {
    onPageChanged: (currentPage: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
}

const Paginator = (props: UsersPropsType1) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p ? styles.selectedPage : ''}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}>{p}</span>
        })}
    </div>
}

export default Paginator