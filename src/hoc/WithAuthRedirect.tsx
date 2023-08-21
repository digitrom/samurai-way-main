import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

export type MapStateToPropsAuthType = {
    isAuth: boolean
}


let mapStateToPropsAuth = (state:AppStateType): MapStateToPropsAuthType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {
    class RedirectComponent extends React.Component<MapStateToPropsAuthType> {
        render() {
            let {isAuth, ...restProps} = this.props
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...restProps as T}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsAuth)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}

//сначала закидываем  isAuth: state.auth.isAuth(они будут у всех одинаковые) на этом уровне - т.е.  коннектим mapStateToPropsAuth с RedirectComponent
// затем 2-ой коннект делаем в ProfileContainer и DialogsContainer, т.е. дозакидываем ту часть стейта, нужную только для этих компонент.