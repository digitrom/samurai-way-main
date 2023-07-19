// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
// const SET_USERS = 'SET_USERS';
// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


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
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}

let initialState: InitialStateType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 5,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: InitialStateType = initialState, action: AllACType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)
            }
        case 'SET_USERS':
            return {
                ...state, users: action.payload.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.payload.currentPage
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state, totalUsersCount: action.payload.totalUsersCount
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state, isFetching: action.payload.isFetching
            }
        case 'TOGGLE_IS_FOLLOWING_IN_PROGRESS':
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id != action.payload.userId)
            }
        default:
            return state

    }
}

export type AllACType = followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalCountACType
    | isFetchingACType
    | toggleIsFollowingInProgressACType

type followACType = ReturnType<typeof follow>
export const follow = (userId: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

type unfollowACType = ReturnType<typeof unfollow>
export const unfollow = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS',
        payload: {
            users
        }
    } as const
}

type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {
            currentPage
        }
    } as const
}

type setTotalCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        payload: {
            totalUsersCount
        }
    } as const
}

type isFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        payload: {
            isFetching
        }
    } as const
}

type toggleIsFollowingInProgressACType = ReturnType<typeof toggleIsFollowingInProgress>
export const toggleIsFollowingInProgress = (isFetching: boolean, userId:string) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_IN_PROGRESS',
        payload: {
            isFetching,
            userId
        }
    } as const
}


