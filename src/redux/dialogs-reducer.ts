
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
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: addMessageACType): InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage = action.payload.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: newMessage}],
            }
        default:
            return state
    }
}


export type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = (newMessageBody: string) => {
    return {
        type: "ADD-MESSAGE",
        payload: {
            newMessageBody
        }
    } as const
}
