import React from "react";
import s from './Navbar.module.css';
import Icon from "./Icon/Icon";
import {NavLink} from "react-router-dom";
import {NavbarPropsType} from "./NavbarContainer";


const Navbar = (props: NavbarPropsType) => {

    let linksElements = props.sideBar.navLinks.map(n => <li className={`${s.item} ${s.hover}`}>
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