import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type PropsType = {
    state: DialogsPageType
}
const Dialogs = (props: PropsType) => {


    let dialogElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.state.messages.map((m) => <Message message={m.message}/>)
let addMessageElement = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
      let text = addMessageElement.current?.value
        alert(text)
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
                <textarea ref={addMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs