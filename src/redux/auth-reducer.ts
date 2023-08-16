import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type InitialStateType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}

let initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: setAuthUserDataACType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
                isAuth:true
            }
        default:
            return state

    }
}

type setAuthUserDataACType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, login: string, email: string, isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            id,
            login,
            email,
            isAuth
        }
    } as const
}

export const getAuthMe = () => (dispatch: Dispatch) => {
    usersAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email, isAuth} = response.data.data;
                dispatch(setAuthUserData(id, login, email, isAuth))
            }
        })
    }


