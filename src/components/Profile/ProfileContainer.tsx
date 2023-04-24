import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, WithRouterProps} from "../../withRouter";


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
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(response => {
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


const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);