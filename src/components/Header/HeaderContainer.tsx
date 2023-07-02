import React from "react";
import axios from "axios";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";


export type MapStateToPropsType = {
    login: null | string
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    setAuthUserData: (id: number, login: string, email: string, isAuth: boolean) => void
}


export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email, isAuth} = response.data.data;
                    this.props.setAuthUserData(id, login, email, isAuth)
                }
            })
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);

