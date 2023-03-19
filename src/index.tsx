import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, addMessage, addPost, StateType, updateNewMessageText, updateNewPostText, subscribe} from "./redux/state";
import {BrowserRouter} from "react-router-dom";



export let reRenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <BrowserRouter> <App state={state}
                             addPost={addPost}
                             addMessage={addMessage}
                             updateNewPostText={updateNewPostText}
                             updateNewMessageText={updateNewMessageText}

        /> </BrowserRouter>
        ,
        document.getElementById('root')
    );
}


reRenderEntireTree(state)

subscribe(reRenderEntireTree)