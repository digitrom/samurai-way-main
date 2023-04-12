import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsPageType, StoreType} from "../../redux/state";
import {addMessageAC, onMessageChangeAC} from "../../redux/dialogs-reducer";



type PropsType = {
    // messages: Array<MessagesType>
    // newMessageText: string
    dialogsPage: DialogsPageType
    // dispatch: (action: ActionsTypes) => void
    // updateNewMessageText: (newText: string | undefined) => void
    addMessage: () => void
    updateNewMessageText: (text: string) => void
}
const Dialogs = (props: PropsType) => {

    let state= props.dialogsPage

    let dialogElements = state.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = state.messages.map((m) => <Message key={m.id} message={m.message}/>)
    // let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let newMessageText = state.newMessageText

    let addMessage = () => {
        props.addMessage()
    }


    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget?.value;
        props.updateNewMessageText(text)
    }

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
                    // ref={newMessageElement}
                />
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs