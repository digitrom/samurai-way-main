import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export type DialogItemPropsType = {
    name: string
    id: number
}

export type DialogsDataType = {
    id: number
    name: string
}

export type MessageDataType = {
    id: number
    message: string
}


const Dialogs = (props: any) => {


    let dialogElements = props.dialogs.map((d: DialogsDataType) => <DialogItem name={d.name} id={d.id}/>)

    let messageElements = props.messages.map((m: MessageDataType) => <Message message={m.message}/>)


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