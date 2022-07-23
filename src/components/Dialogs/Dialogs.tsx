import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div><NavLink to={'/dialogs/1'} className={s.dialog + ' ' + s.active}>Angelina</NavLink></div>
                <div><NavLink to={'/dialogs/2'} className={s.dialog}>Vita</NavLink></div>
                <div><NavLink to={'/dialogs/3'} className={s.dialog}>Katya</NavLink></div>
                <div><NavLink to={'/dialogs/4'} className={s.dialog}>Veronika</NavLink></div>
                <div><NavLink to={'/dialogs/5'} className={s.dialog}>Noemi</NavLink></div>
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