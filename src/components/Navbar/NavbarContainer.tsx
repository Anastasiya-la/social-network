import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {AppStateType} from "../../redux/redux-store";
import {sidebarType} from "../../redux/sidebar-reducer";

type mapStateType = {
    sideBar: sidebarType
}

type mapDispatchType = {}

export type NavbarPropsType = mapStateType & mapDispatchType;

const mapStateToProps = (state: AppStateType): mapStateType => {
    return {
        sideBar: state.sideBar
    }
}

const mapDispatchToProps = (): mapDispatchType => {
    return {}
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer;