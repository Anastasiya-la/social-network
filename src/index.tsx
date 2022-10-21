import React from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage, addPost, stateType, updateNewMessageText, updateNewPostText} from './redux/state';


const rerenderAllTree = () => {
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>,
        document.getElementById('root'))
}

rerenderAllTree();

subscribe(rerenderAllTree);