import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {NewComponent, students, topCars} from "./components/NewComponent/NewComponent";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}


export let posts: Array<PostDataType> = [
    {
        id: 1,
        message: "Hey you",
        likesCount: 121
    },
    {
        id: 2,
        message: "How are You",
        likesCount: 64
    }
]


ReactDOM.render(
    <App posts={posts}/>
    // <NewComponent cars={topCars} />
    ,
  document.getElementById('root')
);