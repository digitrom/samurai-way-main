import {ActionsTypes} from "./state";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type UsersType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type LocationType = {
    country: string
    city: string
}
export type InitialStateType = typeof initialState

let initialState = {
    users: [
        {
            id: '1',
            photoUrl: 'https://avatarfiles.alphacoders.com/196/196653.jpg',
            followed: true,
            fullName: "Roma",
            status: 'I am a father',
            location: {country: 'Poland', city: 'Warsaw'}
        },
        {
            id: '2',
            photoUrl: 'https://avatarfiles.alphacoders.com/196/196653.jpg',
            followed: false,
            fullName: "Sasha",
            status: 'I am a friend',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: '3',
            photoUrl: 'https://avatarfiles.alphacoders.com/196/196653.jpg',
            followed: true,
            fullName: "Dima",
            status: 'I am a brother',
            location: {country: 'Belarus', city: 'Vozera'}
        }
    ] as Array<UsersType>,
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
export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        payload: {
            users: users
        }
    } as const
}
