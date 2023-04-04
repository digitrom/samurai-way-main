import {ChangeEvent} from "react";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type SidebarType = {
    friends: Array<FriendsType>
}
export type FriendsType = {
    id: number,
    name: string
}

export type StoreType = {
    _state: StateType,
    getState: () => StateType
    _callSubscriber: () => void,
    // updateNewMessageText: (newText: string | undefined) => void
    // updateNewPostText: (newText: string | undefined) => void
    // addMessage: (newMessageText: string) => void
    // addPost: (newPostText: string) => void

    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}


export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof onPostChangeAC>
    | AddMessageActionType
    | UpdateNewPostMessageActionType

// export type AddPostActionType = {
//     type: "ADD-POST",
//     payload: {
//         newPostText: string
//     }
// }

export type AddMessageActionType = {
    type: "ADD-MESSAGE"
    payload: {
        newMessageText: string
    }
}

export type UpdateNewPostMessageActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    payload: {
        newText: string
    }

}

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        payload: {
            newPostText: newPostText
        }
    } as const
}


export const addMessageAC = (newMessageText: string) => {
    return {
        type: "ADD-MESSAGE",
        payload: {
            newMessageText: newMessageText
        }
    } as const
}

export const onPostChangeAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        payload: {
            newText: newText
        }
    } as const
}

export const onMessageChangeAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        payload: {
            newText: newText
        }
    } as const
}

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
            newMessageText: "Hey"
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("state was changed")
    },
    // addPost(newPostText: string) {
    //     debugger
    //     let newPost: PostsType = {
    //         id: 4,
    //         message: newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber()
    // },

    // updateNewPostText(newText: string | undefined) {
    //     this._state.profilePage.newPostText = newText || ''
    //     this._callSubscriber()
    // },

    // addMessage(newMessageText: string) {
    //     let newMessage: PostsType = {
    //         id: 4,
    //         message: newMessageText,
    //         likesCount: 0
    //     }
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = ''
    //     this._callSubscriber()
    // },

    // updateNewMessageText(newText: string | undefined) {
    //     this._state.dialogsPage.newMessageText = newText || ''
    //     this._callSubscriber()
    //     console.log(this._state)
    // },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost: PostsType = {
                id: 4,
                message: action.payload.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.payload.newText || ''
            this._callSubscriber()
        } else if (action.type === "ADD-MESSAGE") {
            let newMessage: PostsType = {
                id: 4,
                message: action.payload.newMessageText,
                likesCount: 0
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber()
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogsPage.newMessageText = action.payload.newText || ''
            this._callSubscriber()
        }
    }
}


window.state = store