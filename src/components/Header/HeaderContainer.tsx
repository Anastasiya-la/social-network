import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type mapDispatchToPropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void
}

class HeaderContainer extends React.Component <HeaderPropsType> {
    componentDidMount() {
        authAPI.getAuthUserData().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                this.props.setAuthUserData(id, login, email)
            }


        })
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} setAuthUserData={this.props.setAuthUserData}/>
        )
    }
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);