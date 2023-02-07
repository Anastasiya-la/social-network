import {ActionsTypes, AddPostActionType, profilePageType, UpdateNewPostTextActionType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState: profilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 2},
        {id: 2, message: "It's my first post", likeCount: 10},
        {id: 3, message: "Blalaal", likeCount: 11},
    ],
    newPostText: ''
};

export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 4, message: state.newPostText, likeCount: 0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})