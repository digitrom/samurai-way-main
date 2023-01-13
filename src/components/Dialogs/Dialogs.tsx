import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Roma" id={1}/>
                <DialogItem name="Sasha" id={2}/>
                <DialogItem name="Vlad" id={3}/>
                <DialogItem name="Pasha" id={4}/>


            </div>
            <div className={s.messages}>
                <div className={s.dialog}>
                    <Message message="Hey"/></div>
                <div className={s.dialog}>
                    <Message message="How are You"/></div>
                <div className={s.dialog}>
                    <Message message="Yo"/></div>
            </div>
        </div>
    )
}

export default Dialogs