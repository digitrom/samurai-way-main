import React from "react";
import {addMessageAC, DialogsPageType, onMessageChangeAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (text: string) => void

}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        updateNewMessageText: (text: string) => {
            dispatch(onMessageChangeAC(text))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }

    }
}

 const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;