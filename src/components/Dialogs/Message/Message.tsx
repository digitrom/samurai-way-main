import React from "react";
import s from "../Dialogs.module.css";


type PropsType = {
    message: string
}

export const Message= (props: PropsType) => {
    return (
        <div className={s.dialog}>
            <img src='https://smile-emoji.ru/wp-content/uploads/site-images/simvol-vk/0azvaqcr.png'/>
            {props.message}</div>
    )
}