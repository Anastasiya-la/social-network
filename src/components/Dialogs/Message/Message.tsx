import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>

}

export default Message;