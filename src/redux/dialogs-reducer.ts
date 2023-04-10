import {ActionsTypes, DialogsPageType, PostsType, ProfilePageType, StateType} from "./state";

let initialState ={
    dialogs: [
        {id: 1, name: "Roma"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Vlad"},
        {id: 4, name: "Pasha"}
    ],
    messages: [
        {id: 1, message: "Hey you"},
        {id: 2, message: "How are You"},
        {id: 3, message: "Yo"}
    ],
    newMessageText: ""
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {

    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage: PostsType = {
                id: 4,
                message: action.payload.newMessageText,
                likesCount: 0
            }
            state.messages.push(newMessage);
            state.newMessageText = ''
            break;
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.payload.newText || ''
            break;
    }

    return state
}

export type DialogsActionsTypes = addMessageACType | onMessageChangeACType


type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = (newMessageText: string) => {
    return {
        type: "ADD-MESSAGE",
        payload: {
            newMessageText: newMessageText
        }
    } as const
}
type onMessageChangeACType = ReturnType<typeof onMessageChangeAC>
export const onMessageChangeAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        payload: {
            newText: newText
        }
    } as const
}