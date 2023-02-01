import {ActionsTypes, AddMessageActionType, dialogsPageType, UpdateNewMessageTextActionType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


export const dialogsReducer = (state: dialogsPageType, action: ActionsTypes) => {
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