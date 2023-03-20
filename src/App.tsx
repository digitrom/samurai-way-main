import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StateType, store, StoreType} from "./redux/state";
import {Friends} from "./components/Navbar/Friends/Friends";

type PropsType = {
    state: StateType
    addPost: (newPostText: string) => void
    addMessage: (newMessageText: string) => void
    updateNewPostText: (newText: string | undefined) => void
    updateNewMessageText: (newText: string | undefined) => void
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {
    // const state = props.store.getState
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs
                    dialogsPage={props.state.dialogsPage}
                    addMessage={props.addMessage.bind(props.store)}
                    updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                    newMessageText={props.state.dialogsPage.newMessageText}
                />}/>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    addPost={props.store.addPost.bind(props.store)}
                    updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends' render={() => <Friends state={props.state.sidebar}/>}/>
            </div>
        </div>
    )
}

export default App;
