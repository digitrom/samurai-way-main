import {AllACType} from "./users-reducer";


let initialState =  {
    friends: [
        {id: 1, name: "Sasha"},
        {id: 2, name: "Roma"},
        {id: 3, name: "Dima"},
    ]
}

export type SidebarType = {
    friends: Array<FriendsType>
}

export type FriendsType = {
    id: number
    name: string
}

export const sidebarReducer = (state:SidebarType = initialState, action: AllACType): SidebarType => {

    return state
}