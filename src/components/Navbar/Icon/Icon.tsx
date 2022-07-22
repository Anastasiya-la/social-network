import s from "./Icon.module.css";
import React from "react";

type IconType = {
    version: string
    width: string
    height: string
    viewBox: string
    path: string
}

const Icon = (props: IconType) => {
    return <span className={`${s.icon} ${s.hover}`}>
        <svg version={props.version} width={props.width} height={props.height} viewBox={props.viewBox}>
            <path d={props.path}/>
        </svg></span>
}

export default Icon;


