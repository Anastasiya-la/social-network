import s from './../Dialogs.module.css';
import {createRef} from "react";


export type MessageType = {
    id: number
    message: string
}

const Message = (props: MessageType) => {
    const addMessage = () => {
        alert(newMessageElement.current?.value)
    }
    const newMessageElement = createRef<HTMLTextAreaElement>();

    return <>
        <div className={s.message}>{props.message}</div>
        <div className={s.addMessage}>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>Add</button>
        </div>

    </>

}

export default Message;