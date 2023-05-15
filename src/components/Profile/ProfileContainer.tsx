import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, WithRouterProps} from "../../withRouter";
import {profileAPI} from "../../api/api";


type mapStateToPropsType = {
    profile: ProfileType | null
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType & WithRouterProps


class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        debugger
        let userId = Number(this.props.params.userId);
        if (!userId) {
            userId = 2;
        }
       profileAPI.getUserProfile(userId).then(data => {
            this.props.setUserProfile(data)
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


const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);