import {PostsType, StateType} from "./state";


export const dialogsReducer = (state: StateType, action: ActionsTypes): StateType => {

    if (action.type === "ADD-MESSAGE") {
        let newMessage: PostsType = {
            id: 4,
            message: action.payload.newMessageText,
            likesCount: 0
        }
        state.dialogsPage.messages.push(newMessage);
        state.dialogsPage.newMessageText = ''
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
        state.dialogsPage.newMessageText = action.payload.newText || ''
    }

    return state
}

export type ActionsTypes = addMessageACType | onMessageChangeACType


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