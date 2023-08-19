import React from "react";
import {addMessageAC, DialogsPageType, onMessageChangeAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps} from "react-router-dom";

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

let AuthRedirectComponent = (props: DialogsPropsType) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return <Dialogs {...props}/>
}
 const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default DialogsContainer;
