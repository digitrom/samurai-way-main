import {ActionsTypes, SidebarType} from "./state";

let initialState =  {
    friends: [
        {id: 1, name: "Sasha"},
        {id: 2, name: "Roma"},
        {id: 3, name: "Dima"},
    ]
}

export const sidebarReducer = (state:SidebarType = initialState, action: ActionsTypes): SidebarType => {

    return state
}