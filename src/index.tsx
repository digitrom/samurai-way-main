import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {NewComponent, students, topCars} from "./components/NewComponent/NewComponent";
import {state} from "./redux/state";


ReactDOM.render(
    <App state={state}/>
    // <NewComponent cars={topCars} />
    ,
  document.getElementById('root')
);