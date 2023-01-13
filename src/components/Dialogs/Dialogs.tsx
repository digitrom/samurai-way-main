import React from "react";
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Roma
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Vlad
                </div>
                <div className={s.dialog}>
                    Pasha
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