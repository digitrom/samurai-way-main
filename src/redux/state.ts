import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {DialogsActionsTypes, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
 type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
 type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}
 type MessagesType = {
    id: number
    message: string
}
 type DialogsType = {
    id: number
    name: string
}
 type PostsType = {
    id: number
    message: string
    likesCount: number
}


export type SidebarType = {
    friends: Array<FriendsType>
}
export type FriendsType = {
    id: number
    name: string
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    // updateNewMessageText: (newText: string | undefined) => void
    // updateNewPostText: (newText: string | undefined) => void
    // addMessage: (newMessageText: string) => void
    // addPost: (newPostText: string) => void

    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ProfileActionsTypes | DialogsActionsTypes



export let store: StoreType = {
    _state: {
        sidebar: {
            friends: [
                {id: 1, name: "Sasha"},
                {id: 2, name: "Roma"},
                {id: 3, name: "Dima"},
            ]
        },
        profilePage: {
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
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Roma"},
                {id: 2, name: "Sasha"},
                {id: 3, name: "Vlad"},
                {id: 4, name: "Pasha"}
            ],
            messages: [
                {id: 1, message: "Hey you"},
                {id: 2, message: "How are You"},
                {id: 3, message: "Yo"}
            ],
            newMessageText: ""
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("state was changed")
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()

    }
}


window.state = store