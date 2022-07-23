import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Angelina</div>
                <div className={s.dialog}>Vita</div>
                <div className={s.dialog}>Katya</div>
                <div className={s.dialog}>Veronika</div>
                <div className={s.dialog}>Noemi</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-incubator?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;