import React from 'react';
import './index.css';
import store from "./redux/store";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {stateType} from "./redux/store";


const rerenderAllTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderAllTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderAllTree(state)
});