import s from './../Dialogs.module.css';
import {createRef} from "react";
import {ActionsTypes} from "../../../redux/state";


export type MessageType = {
    id: number
    message: string
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

const Message = (props: MessageType) => {
    const addMessage = () => {
        if (newMessageElement.current) {
            alert(newMessageElement.current.value);
        }


    }
    const newMessageElement = createRef<HTMLTextAreaElement>();
    const onNewMessageTextChange = () => {
        if (newMessageElement.current) {
            let newText = newMessageElement.current.value
            let action: ActionsTypes = {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: newText}
            props.dispatch(action);
        }

    }
    return <>
        <div className={s.message}>{props.message}</div>
        <div className={s.addMessage}>
            <textarea onChange={onNewMessageTextChange} value={props.newMessageText} ref={newMessageElement}></textarea>
            <button onClick={addMessage}>Add</button>
        </div>

    </>

}

export default Message;