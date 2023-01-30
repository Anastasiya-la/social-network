import s from './Dialogs.module.css';
import DialogItem, {DialogItemType} from "./DialogItem/DialogItem";
import Message, {MessageType} from "./Message/Message";
import {
    ActionsTypes,
    addMessageActionCreator,
    dialogsPageType,
    updateNewMessageTextActionCreator
} from "../../redux/state";
import {ChangeEvent, createRef} from "react";

type DialogsPropsType = {
    state: dialogsPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>);
    const addMessage = () => {
        props.dispatch(addMessageActionCreator())


    }
    const onNewMessageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value;
        props.dispatch(updateNewMessageTextActionCreator(newText))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.addMessage}>
                    <div> <textarea placeholder='Enter your message' onChange={onNewMessageTextChange}
                                    value={props.state.newMessageText}></textarea></div>
                    <div>
                        <button onClick={addMessage}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;