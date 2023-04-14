import React from "react";
import {addMessageAC, onMessageChangeAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {


    return <StoreContext.Consumer>
        { (store) => {
            let state = store.getState().dialogsPage

            let addMessage = () => {
                store.dispatch(addMessageAC(state.newMessageText))
            }

            let onMessageChange = (text: string) => {
                store.dispatch(onMessageChangeAC(text))
            }

            return <Dialogs
                updateNewMessageText={onMessageChange}
                addMessage={addMessage}
                dialogsPage={state}/>
        }
    }
    </StoreContext.Consumer>

}

export default DialogsContainer