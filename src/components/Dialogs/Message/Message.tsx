import React from "react";
import s from "../Dialogs.module.css";


type PropsType = {
    message: string
}

export const Message= (props: PropsType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}