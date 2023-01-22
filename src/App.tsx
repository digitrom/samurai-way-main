import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs, {DialogsDataType, MessageDataType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


function App(props:any) {
    let dialogs: Array<DialogsDataType> = [
        {
            id: 1,
            name: "Roma"
        },
        {
            id: 2,
            name: "Sasha"
        },
        {
            id: 3,
            name: "Vlad"
        },
        {
            id: 4,
            name: "Pasha"
        }
    ]
    let messages: Array<MessageDataType> = [
        {
            id: 1,
            message: "Hey you"
        },
        {
            id: 2,
            message: "How are You"
        },
        {
            id: 3,
            message: "Yo"
        }
    ]

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile posts={props.posts} />}/>
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;
