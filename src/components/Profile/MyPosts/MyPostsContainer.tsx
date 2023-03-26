import React from "react";
import {addPostActionCreator, profilePageType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {PostType} from "./Post/Post";


type mapStateType = {
    posts: Array<PostType>,
    newPostText: string
}

type mapDispatchType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export type MyPostsPropsType = mapStateType & mapDispatchType;

const mapStateToProps = (state: AppStateType): mapStateType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text));

        }
    }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;