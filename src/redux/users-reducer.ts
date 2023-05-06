import {ActionsTypes} from "./state";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type UserType = {
    id: string
    photos: {
        large: string
        small: string
    }
    followed: boolean
    name: string
    status: string
    location: LocationType
}

export type LocationType = {
    country: string
    city: string
}
export type InitialStateType = {
    users: Array<UserType>
}

let initialState:InitialStateType = {
users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.payload.users]
            }
        default:
            return state

    }
}

export type FollowUnfollowACType = followACType
    | unfollowACType
    | setUsersACType

type followACType = ReturnType<typeof followAC>
export const followAC = (userId: string) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const
}

type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: string) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    } as const
}

type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        payload: {
            users: users
        }
    } as const
}
