import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

export type MapStateToPropsTypeAuth = {
    isAuth: boolean
}


let mapStateToPropsAuth = (state:AppStateType): MapStateToPropsTypeAuth => {
    return {
        isAuth: state.auth.isAuth
    }
}


export function withAuthRedirect<T>(Component: ComponentType) {
    class RedirectComponent extends React.Component<MapStateToPropsTypeAuth> {
        render() {
            let {isAuth, ...restProps} = this.props
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...restProps as T}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsAuth)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}

