
export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}

export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Roma"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Vlad"},
        {id: 4, name: "Pasha"}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: "Hey you"},
        {id: 2, message: "How are You"},
        {id: 3, message: "Yo"}
    ] as Array<MessagesType>,
    newMessageText: ""
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsTypes): InitialStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            return  {
                ...state,
                newMessageText: action.payload.newText
            }
        case "ADD-MESSAGE":
            let newMessage = state.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: newMessage}],
                newMessageText: ''
            }
        default:
            return state
    }
}

export type DialogsActionsTypes = addMessageACType | onMessageChangeACType


type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE",
        payload: {
            newMessageText: ''
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