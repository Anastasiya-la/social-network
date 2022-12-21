import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, profilePageType} from "../../redux/state";

type ProfilePropsType = {
    ProfilePage: profilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.ProfilePage.posts} dispatch={props.dispatch}
                     newPostText={props.ProfilePage.newPostText}/>
        </div>
    )
}
export default Profile;