import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type ProfileStatusPropsType = {
    status: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
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
    profile: null as ProfileType | null,
    status: ""
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = action.payload.newPostText
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: newPost, likesCount: 43}],
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

export type ProfileActionsTypes = addPostACType  | setProfileACType | setProfileStatusACType

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        payload: {
            newPostText
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

export const getUserProfile = (userId: string | number) => async (dispatch: Dispatch) => {
   let response =  await usersAPI.getProfile(userId)
            // полученные данные из урла запрашиваем у сервера
            dispatch(setProfile(response.data))
}
export const getProfileStatus = (userId: string | number) => async (dispatch: Dispatch) => {
   let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data))
}

export const updateProfileStatus = (status: ProfileStatusPropsType) => async (dispatch: Dispatch) => {
  let response = await profileAPI.updateStatus(status)
                if (response.data.resultCode === 0) {
                dispatch(setStatus(status.status))
            }
}