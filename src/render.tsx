import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";



export let reRenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <BrowserRouter> <App state={state} addPost={addPost}/> </BrowserRouter>

        // <NewComponent cars={topCars} />
        ,
        document.getElementById('root')
    );
}
