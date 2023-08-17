import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/dialogs-reducer";
import {DialogsPropsType} from "./DialogsContainer"
import {Redirect} from "react-router-dom";



const Dialogs = (props: DialogsPropsType) => {

    let state= props.dialogsPage

    let dialogElements = state.dialogs.map((d:DialogsType) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = state.messages.map((m:MessagesType) => <Message key={m.id} message={m.message}/>)
    let newMessageText = state.newMessageText

    let addMessage = () => {
        props.addMessage()
    }


    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget?.value;
        props.updateNewMessageText(text)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea
                    placeholder="Enter your message"
                    value={newMessageText}
                    onChange={onMessageChange}
                />
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs