import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {StoreType} from "./redux/state";
import StoreContext, {Provider} from "./StoreContext";

export let reRenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

reRenderEntireTree(store)

store.subscribe(() => {
    reRenderEntireTree(store)
})