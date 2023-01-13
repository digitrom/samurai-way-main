import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                   <NavLink to="/dialogs/1">Roma</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Vlad</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Pasha</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hey</div>
                <div className={s.dialog}>How are You</div>
                <div className={s.dialog}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs