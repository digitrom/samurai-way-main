import {ActionsTypes} from "./state";

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type InitialStateType = typeof initialState

let initialState ={
    posts: [
        {
            id: 1,
            message: "Hey you",
            likesCount: 121
        },
        {
            id: 2,
            message: "How are You",
            likesCount: 64
        }
    ] as Array<PostsType>,
    newPostText: ""
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType => {
let stateCopy;
    switch (action.type) {
        case "ADD-POST":
            let newPost = state.newPostText
            stateCopy= {
                ...state,
                    posts: [...state.posts, {id: 3, message: newPost, likesCount: 43 }]
            }
            return stateCopy
        case "UPDATE-NEW-POST-TEXT":
           stateCopy = {
               ...state,
               newPostText: action.payload.newText
           }
            return stateCopy
        default:
            return state
        }
}

export type ProfileActionsTypes = addPostACType | onPostChangeACType

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: "ADD-POST",
        payload: {
            // newPostText: newPostText
            newPostText: ""
        }
    } as const
}

type onPostChangeACType = ReturnType<typeof onPostChangeAC>
export const onPostChangeAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        payload: {
            newText: text
        }
    } as const
}