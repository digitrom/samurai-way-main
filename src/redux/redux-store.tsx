import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import { usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {useDispatch} from "react-redux";
import thunkMiddleware,{ThunkDispatch} from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
    }
)


export type  AppStateType =  ReturnType <typeof rootReducer>
export type UsersDispatchType = ThunkDispatch<AppStateType, unknown, AnyAction>
// export const useUsersDispatch = useDispatch<AppDispatchType>;
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

window.state= store
