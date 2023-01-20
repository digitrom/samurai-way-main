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

type DialogsDataType ={
    id: number
    name: string
}

type MessageDataType ={
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

    let dialogsData: Array<DialogsDataType> = [
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
    let messagesData: Array<MessageDataType> = [
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


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>



            </div>
            <div className={s.messages}>
                <div className={s.dialog}>
                    <Message message={messagesData[0].message}/></div>
                <div className={s.dialog}>
                    <Message message={messagesData[1].message}/></div>
                <div className={s.dialog}>
                    <Message message={messagesData[2].message}/></div>

            </div>
        </div>
    )
}

export default Dialogs