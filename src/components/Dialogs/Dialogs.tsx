import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    return <div><NavLink to={'/dialogs/' + props.id} className={s.dialog + ' ' + s.active}>{props.name}</NavLink></div>
}

const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>

}


const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Angelina'},
        {id: 2, name: 'Vita'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Veronika'},
        {id: 5, name: 'Noemi'},
        {id: 6, name: 'Diana'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-incubator?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

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