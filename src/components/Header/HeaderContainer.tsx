import React from "react";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getAuthMe, logout} from "../../redux/auth-reducer";


export type MapStateToPropsType = {
    login: null | string
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    logout: () => void
}


export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<AuthPropsType> {

    render() {
        return <Header login={this.props.login} logout={this.props.logout} isAuth={this.props.isAuth}/>
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);

