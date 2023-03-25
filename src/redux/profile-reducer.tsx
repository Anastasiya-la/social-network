import {ActionsTypes, AddPostActionType, UpdateNewPostTextActionType} from "./store";

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


type PostType = {
    id: number
    message: string
    likeCount: number
}
export type profilePageType = {
    posts: Array<PostType>
    newPostText: string
}

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
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};
        default:
            return state;
    }

}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})