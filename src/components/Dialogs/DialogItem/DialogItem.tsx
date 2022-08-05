import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}


const DialogItem = (props: DialogItemType) => {
    return <div><NavLink to={'/dialogs/' + props.id} className={s.dialog + ' ' + s.active}>{props.name}</NavLink></div>
}


export default DialogItem;