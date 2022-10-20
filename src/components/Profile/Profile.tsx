import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType, updateNewPostText} from "../../redux/state";

type ProfilePropsType = {
    ProfilePage: profilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.ProfilePage.posts} addPost={props.addPost}
                     newPostText={props.ProfilePage.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
export default Profile;