import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Angelina'} id={'1'}/>
                <DialogItem name={'Vita'} id={'2'}/>
                <DialogItem name={'Katya'} id={'3'}/>
                <DialogItem name={'Veronika'} id={'4'}/>
                <DialogItem name={'Noemi'} id={'5'}/>
                <DialogItem name={'Diana'} id={'6'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your it-incubator?'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    );
}

export default Dialogs;