import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import { usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {useDispatch} from "react-redux";
import thunkMiddleware,{ThunkDispatch} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let rootReducer = combineReducers({
    profilePage: profileReducer, // чтобы обратиться к status в initialState - profilePage.status
    dialogsPage: dialogsReducer, // чтобы обратиться к profile  в initialState - profilePage.profile.
    sidebar: sidebarReducer, //и т.д
    usersPage: usersReducer,
    auth: authReducer,
    form:formReducer
    }
)


export type  AppStateType =  ReturnType <typeof rootReducer>
export type UsersDispatchType = ThunkDispatch<AppStateType, unknown, AnyAction>
// export const useUsersDispatch = useDispatch<AppDispatchType>;
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

window.state= store

