import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type PropsType = {
    newMessageText: string
    addMessage: (newMessageText: string) => void
    dialogsPage: DialogsPageType
    updateNewMessageText: (newText: string | undefined) => void
}
const Dialogs = (props: PropsType) => {


    let dialogElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = props.dialogsPage.messages.map((m) => <Message key={m.id} message={m.message}/>)
    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        props.addMessage(props.newMessageText)
    }

    let onMessageChange = () => {
        let text = newMessageElement.current?.value;
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
                    value={props.dialogsPage.newMessageText}
                    onChange={onMessageChange}
                    ref={newMessageElement}
                />
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs