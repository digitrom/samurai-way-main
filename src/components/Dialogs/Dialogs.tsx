import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export type DialogItemPropsType = {
    name: string
    id: number
}

type DialogsDataType = {
    id: number
    name: string
}

type MessageDataType = {
    id: number
    message: string
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