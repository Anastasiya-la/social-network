import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, stateType, updateNewMessageText, updateNewPostText} from './redux/state';


export const rerenderAllTree = (state: stateType) => {
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>,
        document.getElementById('root'))
}