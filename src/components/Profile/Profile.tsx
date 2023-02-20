import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, profilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    state: profilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer  posts={props.state.posts} dispatch={props.dispatch} newPostText={props.state.newPostText}/>
        </div>
    )
}
export default Profile;