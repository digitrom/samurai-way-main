import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    name: string
    id: number
}
export const DialogItem = (props: PropsType) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png' />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}