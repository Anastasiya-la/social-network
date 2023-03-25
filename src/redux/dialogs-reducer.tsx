import {ActionsTypes, AddMessageActionType, UpdateNewMessageTextActionType} from "./store";

export const ADD_MESSAGE = 'ADD-MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


type DialogType = {
    name: string
    id: number
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Angelina'},
        {id: 2, name: 'Vita'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Veronika'},
        {id: 5, name: 'Noemi'},
        {id: 6, name: 'Diana'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How your it-incubator?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as Array<MessageType>,
    newMessageText: ''
}

export type DialogsPageType = typeof initialState;

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {id: 5, message: state.newMessageText}
            return {
                ...state, newMessageText: '', messages: [...state.messages, newMessage]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.newText};
        default:
            return state;
    }
}

export const addMessageActionCreator = (): AddMessageActionType => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (newText: string): UpdateNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newText
})