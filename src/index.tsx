import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {StoreType} from "./redux/state";

export let reRenderEntireTree = (store: StoreType)   => {
    ReactDOM.render(
        <BrowserRouter> <App
            store={store}
            // state={store.getState()}
            // dispatch={store.dispatch.bind(store)}
            // addMessage={store.addMessage.bind(store)}
            // updateNewPostText={store.updateNewPostText.bind(store)}
            // updateNewMessageText={store.updateNewMessageText.bind(store)}
            // store={store}
        /> </BrowserRouter>
        ,
        document.getElementById('root')
    );
}

reRenderEntireTree(store)

store.subscribe(()=> {
    reRenderEntireTree(store)
})