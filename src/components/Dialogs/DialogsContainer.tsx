import {
    ActionsTypes,
    dialogsPageType
} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs";

type DialogsContainerType = {
    state: dialogsPageType
    dispatch: (action: ActionsTypes) => void
}

const DialogsContainer = (props: DialogsContainerType) => {

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())


    }
    const onNewMessageTextChange = (text: string) => {
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (<Dialogs state={props.state} addMessage={addMessage} updateNewMessage={onNewMessageTextChange}/>);
}

export default DialogsContainer;