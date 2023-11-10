import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Friends} from "./components/Navbar/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {AppStateType, store} from "./redux/redux-store";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./Login/Login";
import {connect} from "react-redux";
import {getAuthMe} from "./redux/auth-reducer";
import {compose} from "redux";

type PropsType = {
    // state: StateType
    // dispatch: (action: ActionsTypes) => void
    // store: StoreType
}

export type MapStateToPropsType = {
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    getAuthMe: () => void
}

export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component<AuthPropsType> {
    componentDidMount() {
        this.props.getAuthMe()
    }
    render() {
        const state = store.getState()
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' render={() => <Friends state={state.sidebar}/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth}
}

export default compose(
    withRouter,
    connect(null, {getAuthMe}))
    (App);

