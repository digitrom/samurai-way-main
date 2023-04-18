import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import {Provider} from "react-redux";
import {store} from "./redux/redux-store";

export let reRenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

reRenderEntireTree()

store.subscribe(() => {
    reRenderEntireTree()
})