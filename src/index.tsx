import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const rerenderAllTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderAllTree();

store.subscribe(rerenderAllTree);