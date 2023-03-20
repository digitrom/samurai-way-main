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
    updateNewMessageText: (newText: string | undefined) => void
    updateNewPostText: (newText: string | undefined) => void
    addMessage: (newMessageText: string) => void
    addPost: (newPostText: string) => void
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
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
            newPostText: "It-kamasutra"
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
        debugger
        return this._state;
    },
    _callSubscriber() {
        console.log("state was changed")
    },
    addPost(newPostText: string) {
        debugger
        let newPost: PostsType = {
            id: 4,
            message: newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    addMessage(newMessageText: string) {
        let newMessage: PostsType = {
            id: 4,
            message: newMessageText,
            likesCount: 0
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber()
    },
    updateNewPostText(newText: string | undefined) {
        this._state.profilePage.newPostText = newText || ''
        this._callSubscriber()
    },
    updateNewMessageText(newText: string | undefined) {
        this._state.dialogsPage.newMessageText = newText || ''
        this._callSubscriber()
        console.log(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store;
window.state = store