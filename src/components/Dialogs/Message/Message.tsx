import s from './../Dialogs.module.css';
import {createRef} from "react";


export type MessageType = {
    id: number
    message: string
    addMessage: () => void
    newMessageText: string
    updateNewMessageText: (newTextMessage: string) => void
}

const Message = (props: MessageType) => {
    const addMessage = () => {
        if(newMessageElement.current){alert(newMessageElement.current.value);}


    }
    const newMessageElement = createRef<HTMLTextAreaElement>();
    const onNewMessageTextChange = () => {
        if (newMessageElement.current) {
            let newText = newMessageElement.current.value
            props.updateNewMessageText(newText);
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