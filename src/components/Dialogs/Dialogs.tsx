import s from './Dialogs.module.css';
import DialogItem, {DialogItemType} from "./DialogItem/DialogItem";
import Message, {MessageType} from "./Message/Message";
import {dialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    state: dialogsPageType
    addMessage: () => void
    updateNewMessageText: (newTextMessage: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message} addMessage={props.addMessage} newMessageText={props.state.newMessageText} updateNewMessageText={props.updateNewMessageText}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;