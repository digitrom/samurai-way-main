import {PostsType, StateType} from "./state";

export const profileReducer = (state: StateType, action: ActionsTypes):StateType => {

    if (action.type === "ADD-POST") {
        let newPost: PostsType = {
            id: 4,
            message: action.payload.newPostText,
            likesCount: 0
        }
        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = ''
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        state.profilePage.newPostText = action.payload.newText || ''
    }
    return state
}

export type ActionsTypes = addPostACType | onPostChangeACType


type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        payload: {
            newPostText: newPostText
        }
    } as const
}

type onPostChangeACType = ReturnType<typeof onPostChangeAC>
export const onPostChangeAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        payload: {
            newText: newText
        }
    } as const
}