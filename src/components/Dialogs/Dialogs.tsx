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

type DialogsDataType = {
    id: number
    name: string
}

type MessageDataType = {
    id: number
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

    let dialogs: Array<DialogsDataType> = [
        {
            id: 1,
            name: "Roma"
        },
        {
            id: 2,
            name: "Sasha"
        },
        {
            id: 3,
            name: "Vlad"
        },
        {
            id: 4,
            name: "Pasha"
        }
    ]
    let messages: Array<MessageDataType> = [
        {
            id: 1,
            message: "Hey you"
        },
        {
            id: 2,
            message: "How are You"
        },
        {
            id: 3,
            message: "Yo"
        }
    ]

    let dialogElements = dialogs.map((d: DialogsDataType) => <DialogItem name={d.name} id={d.id}/>)

    let messageElements = messages.map((m: MessageDataType) => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs