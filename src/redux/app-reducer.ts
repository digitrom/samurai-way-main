import {authAPI} from "../api/api";
import {AppThunk} from "../redux/redux-store";
import {getAuthMe} from "./auth-reducer";

export type InitialStateType = {
    isInitialized: boolean
}

let initialState: InitialStateType = {
   isInitialized: false
}

const SET_INITIALIZED = 'SET-INITIALIZED'


export const appReducer = (state: InitialStateType = initialState, action: isInitializedACType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized:true,
            }
        default:
            return state

    }
}

type isInitializedACType = ReturnType<typeof isInitializedAC>
export const isInitializedAC = () => ({type:SET_INITIALIZED} as const)

export const initializeApp = ():AppThunk => (dispatch) => {
let promise = dispatch(getAuthMe())
   Promise.all([promise])
    .then(()=>{
        dispatch(isInitializedAC())
    })
}

export default appReducer

