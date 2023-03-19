

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

let reRenderEntireTree = (state: StateType) => {
    console.log("state was changed")
}

export const addPost = () => {
    let newPost: PostsType = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    reRenderEntireTree(state)
}

export const addMessage = () => {
    let newMessage: PostsType = {
        id: 4,
        message: state.dialogsPage.newMessageText,
        likesCount: 0
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = ''
    reRenderEntireTree(state)
}

export const updateNewPostText = (newText: string | undefined) => {
    state.profilePage.newPostText = newText || ''
    reRenderEntireTree(state)
}

export const updateNewMessageText = (newText: string | undefined) => {
    state.dialogsPage.newMessageText = newText || ''
    reRenderEntireTree(state)
    console.log(state)
}

export const subscribe = (callBack: (state:StateType) => void)  => {
    reRenderEntireTree = callBack
}



export let state: StateType = {
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
}


window.state = state