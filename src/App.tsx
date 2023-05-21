import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Friends} from "./components/Navbar/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {store} from "./redux/redux-store";

type PropsType = {
    // state: StateType
    // dispatch: (action: ActionsTypes) => void
    // store: StoreType
}

const App: React.FC<PropsType> = (props) => {
    const state = store.getState()
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <ProfileContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends' render={() => <Friends state={state.sidebar}/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    )
}

export default App;
