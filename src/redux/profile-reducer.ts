import {ActionsTypes, PostsType, ProfilePageType} from "./state";

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
    ],
    newPostText: ""
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes):ProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: 4,
                message: action.payload.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = ''
            break;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.payload.newText || ''
            break;
    }
    return state
}

export type ProfileActionsTypes = addPostACType | onPostChangeACType

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        payload: {
            newPostText: newPostText
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