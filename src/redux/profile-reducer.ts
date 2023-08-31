import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type ProfileStatusPropsType = {
    status: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    photos: { small: string, large: string }
}

export type InitialStateType = typeof initialState

    let initialState = {
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
    newPostText: "",
    profile: null as ProfileType | null,
    status: ""
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = state.newPostText
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: newPost, likesCount: 43}],
                newPostText: ""
            }
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.payload.newText
            }
        case "SET-PROFILE":
            return {
                ...state,
                profile: action.payload.profile
            }
        case "SET-STATUS":
            return {
                ...state,
                status: action.payload.status
            }

        default:
            return state
    }
}

export type ProfileActionsTypes = addPostACType | onPostChangeACType | setProfileACType | setProfileStatusACType

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: "ADD-POST",
        payload: {
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
type setProfileACType = ReturnType<typeof setProfile>
export const setProfile = (profile: ProfileType) => {
    return {
        type: "SET-PROFILE",
        payload: {
            profile
        }
    } as const
}

type setProfileStatusACType = ReturnType<typeof setStatus>
export const setStatus = (status: string) => {
    return {
        type: "SET-STATUS",
        payload: {
            status
        }
    } as const
}

export const getUserProfile = (userId: string | number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            // полученные данные из урла запрашиваем у сервера
            dispatch(setProfile(response.data))
        })
}
export const getProfileStatus = (userId: string | number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateProfileStatus = (status: ProfileStatusPropsType) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            // debugger
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status.status))
            }
        })
}