import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType, StoreType} from "../../redux/state";
import {addMessageAC, onMessageChangeAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



type PropsType = {
    // messages: Array<MessagesType>
    // newMessageText: string
    // dialogsPage: DialogsPageType
    // dispatch: (action: ActionsTypes) => void
    // updateNewMessageText: (newText: string | undefined) => void
    store: StoreType
}
const DialogsContainer = (props: PropsType) => {

    let state = props.store.getState().dialogsPage

    let addMessage = () => {
        props.store.dispatch(addMessageAC(state.newMessageText))
    }

    let onMessageChange = (text: string) => {
        props.store.dispatch(onMessageChangeAC(text))
    }

    return (
        <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state}/>
    )
}

export default DialogsContainer