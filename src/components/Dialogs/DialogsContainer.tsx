import React from "react";
import {addMessageAC, DialogsPageType, onMessageChangeAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

export type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

export type MapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (text: string) => void

}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default  DialogsContainer

