import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StateType} from "./redux/state";

export type StateRootType = {
    state:StateType
}



function App(props:StateRootType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />}/>
                    <Route path='/profile' render={ () => <Profile state={props.state.profilePage} />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;
