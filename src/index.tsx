import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let reRenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter> <App state={store.getState()}
                             addPost={store.addPost}
                             addMessage={store.addMessage}
                             updateNewPostText={store.updateNewPostText}
                             updateNewMessageText={store.updateNewMessageText}
                             store={store}

        /> </BrowserRouter>
        ,
        document.getElementById('root')
    );
}


reRenderEntireTree()

store.subscribe(reRenderEntireTree)