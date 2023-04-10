import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

export let reRenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter> <App state={store.getState()}
                             dispatch={store.dispatch.bind(store)}
                             // addMessage={store.addMessage.bind(store)}
                             // updateNewPostText={store.updateNewPostText.bind(store)}
                             // updateNewMessageText={store.updateNewMessageText.bind(store)}
                             // store={store}
        /> </BrowserRouter>
        ,
        document.getElementById('root')
    );
}


reRenderEntireTree()

store.subscribe(reRenderEntireTree)