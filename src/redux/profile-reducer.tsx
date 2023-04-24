import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "./dialogs-reducer";

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_USER_PROFILE = 'SET-USER-PROFILE';


type PostType = {
    id: number
    message: string
    likeCount: number
}
export type profilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: null | ProfileType
}

type AddPostActionType = {
    type: typeof ADD_POST
}
type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
type AddMessageActionType = {
    type: typeof ADD_MESSAGE
}
type UpdateNewMessageTextActionType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    newText: string
}
type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: null | ProfileType
}

type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType | setUserProfileActionType;

export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string
        large: string
    }
}

let initialState: profilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 2},
        {id: 2, message: "It's my first post", likeCount: 10},
        {id: 3, message: "Blalaal", likeCount: 11},
    ],
    newPostText: '',
    profile: null
};

export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 4, message: state.newPostText, likeCount: 0};
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }

}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})
export const setUserProfile = (profile: null | ProfileType): setUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profile
})
