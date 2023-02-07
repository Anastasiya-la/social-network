import {ActionsTypes, AddMessageActionType, dialogsPageType, UpdateNewMessageTextActionType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState: dialogsPageType = {
    dialogs: [
        {id: 1, name: 'Angelina'},
        {id: 2, name: 'Vita'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Veronika'},
        {id: 5, name: 'Noemi'},
        {id: 6, name: 'Diana'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How your it-incubator?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageText: ''
}


export const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {id: 5, message: state.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = (): AddMessageActionType => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (newText: string): UpdateNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newText
})