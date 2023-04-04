import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, addMessageAC, DialogsPageType, onMessageChangeAC} from "../../redux/state";



type PropsType = {
    // messages: Array<MessagesType>
    // newMessageText: string
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
    // updateNewMessageText: (newText: string | undefined) => void
}
const Dialogs = (props: PropsType) => {


    let dialogElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = props.dialogsPage.messages.map((m) => <Message key={m.id} message={m.message}/>)
    // let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        props.dispatch(addMessageAC(props.dialogsPage.newMessageText))
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // let text = newMessageElement.current?.value;
        props.dispatch(onMessageChangeAC(e.currentTarget.value))
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
                    value={props.dialogsPage.newMessageText}
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