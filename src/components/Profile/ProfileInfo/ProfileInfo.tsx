import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div>
            <div><img src="https://www.w3schools.com/howto/img_nature_wide.jpg"
                      alt=""/></div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'ava'}/>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;