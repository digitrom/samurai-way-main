
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
    photos: { small: string, large: string}
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
    profile: null as ProfileType | null
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

        default:
            return state
    }
}

export type ProfileActionsTypes = addPostACType | onPostChangeACType | setProfileACType

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