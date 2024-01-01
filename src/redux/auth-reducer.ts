import {authAPI} from "../api/api";
import {AppThunk} from "../redux/redux-store";
import {FormDataType} from "../Login/Login";
import {stopSubmit} from "redux-form";

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

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'

export const authReducer = (state: InitialStateType = initialState, action: setAuthUserDataACType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state

    }
}

type setAuthUserDataACType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: null | number, login: null | string, email: null | string, isAuth: boolean) => {
    //debugger
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            login,
            email,
            isAuth
        }
    } as const
}

export const getAuthMe = ():AppThunk => async (dispatch) => {
    // debugger
     let response = await authAPI.me()
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email, true))
            }
}

export const login = (data: FormDataType):AppThunk => async (dispatch) => {
    // debugger

  let response =  await  authAPI.login(data)
            if (response.data.resultCode === 0) {
                dispatch(getAuthMe())
            }else {
                const message = response.data.messages.length > 0 ? response.data.messages[0] : 'seome error'
                dispatch(stopSubmit('login', {_error:message}))
            }
}

export const logout = ():AppThunk => async (dispatch) => {
   let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))

            }
}



