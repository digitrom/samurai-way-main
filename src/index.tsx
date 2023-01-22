import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {NewComponent, students, topCars} from "./components/NewComponent/NewComponent";

ReactDOM.render(
    <App />
    // <NewComponent cars={topCars} />
    ,
  document.getElementById('root')
);