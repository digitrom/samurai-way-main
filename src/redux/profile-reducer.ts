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
} as ProfilePageType

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType => {

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