import s from './../Dialogs.module.css';
import {createRef} from "react";
import {ActionsTypes} from "../../../redux/store";


export type MessageType = {
    id: number
    message: string
}


const Message = (props: MessageType) => {

    return <div className={s.message}>{props.message}</div>


}

export default Message;