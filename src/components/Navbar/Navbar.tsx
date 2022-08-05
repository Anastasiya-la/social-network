import React from "react";
import s from './Navbar.module.css';
import Icon, {IconType} from "./Icon/Icon";
import {NavLink} from "react-router-dom";
import {sidebarType} from "../../redux/state";

type NavbarPropsType = {
    state: sidebarType
}
export type NavLinkType = {
    to: string
    name: string
    icon: IconType
}

const Navbar = (props: NavbarPropsType) => {

    let linksElements = props.state.navLinks.map(n => <li className={`${s.item} ${s.hover}`}>
        <NavLink to={n.to} className={({isActive}) => isActive ? s.active : undefined}>
            <Icon version={n.icon.version} width={n.icon.width} height={n.icon.height}
                  viewBox={n.icon.viewBox}
                  path={n.icon.path}/>
            {n.name}
        </NavLink>
    </li>);

    return (
        <nav className={s.nav}>
            <ul className={s.menu}>
                {linksElements}
            </ul>

        </nav>
    )
}
export default Navbar;