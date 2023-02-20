import React from "react";
import Post, {PostType} from "./Post/Post";
import {
    ActionsTypes
} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsContainerType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


const MyPostsContainer = (props: MyPostsContainerType) => {
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let updateNewPostText = (text: string) => {
        props.dispatch(updateNewPostTextActionCreator(text));

    }

    return <MyPosts posts={props.posts} addPost={addPost} newPostText={props.newPostText}
                    updateNewPostText={updateNewPostText}/>
}

export default MyPostsContainer;