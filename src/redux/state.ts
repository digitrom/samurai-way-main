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
}
export type ProfilePageType = {
    posts: Array<PostsType>
}

export type SidebarType = {
    friends: Array<FriendsType>
}

export type FriendsType = {
    id: number,
    name: string
}

export const addPost = (postMessage: string) => {
    debugger
   let newPost: PostsType = {
       id: 4,
       message: postMessage,
       likesCount: 0
       }
       state.profilePage.posts.push(newPost);
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
        ]
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
        ]
    }
}
