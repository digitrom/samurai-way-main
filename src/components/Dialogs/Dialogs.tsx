import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/dialogs-reducer";
import {DialogsPropsType} from "./DialogsContainer"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";


const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogs.map((d: DialogsType) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = state.messages.map((m: MessagesType) => <Message key={m.id} message={m.message}/>)
    let newMessageText = state.newMessageText

    let addMessage = () => {
        // props.addMessage()
        alert('sdsds')
    }

    // if (!props.isAuth) return <Redirect to={'/login'}/>


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <AddMessageFormRedux
                // onMessageChange={onMessageChange}
                onSubmit={addMessage}
                // newMessageText={newMessageText}
                // handleSubmit={handleSubmit}
            />
        </div>
    )
}

// type AddMessageFormPropsType = {
//     onMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
//     addMessage: () => void
//     newMessageText: string
//     handleSubmit: () => void
// }
const AddMessageForm:React.FC<InjectedFormProps<FormDataType>> = (props: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field  component='textarea' name='newMessageBody' placeholder="Enter your message"/>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

type FormDataType = {
    dialogAddMessageForm: string
}


const AddMessageFormRedux= reduxForm<FormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs