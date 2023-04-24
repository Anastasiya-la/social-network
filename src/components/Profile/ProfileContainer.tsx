import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";


type mapStateToPropsType = {
    profile: ProfileType | null
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props}/>
            </div>
        )
    }

}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);