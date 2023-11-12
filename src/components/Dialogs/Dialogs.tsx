import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/dialogs-reducer";
import {DialogsPropsType} from "./DialogsContainer"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/formsControl/Textarea";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";


const maxLength100 =  maxLengthCreator(100)
const AddMessageForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field  name={'newMessageBody'}
                    placeholder={"Enter your message"}
                    component={Textarea}
                    validate={[required, maxLength100] }
            />
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux= reduxForm<FormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)


const Dialogs = (props: DialogsPropsType) => {


    let state = props.dialogsPage
    let dialogElements = state.dialogs.map((d: DialogsType) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = state.messages.map((m: MessagesType) => <Message key={m.id} message={m.message}/>)

    let onSubmit = (formData: FormDataType) => {
        props.addMessage(formData.newMessageBody)

    }
    // if (props.isAuth) return <Redirect to={'/login'}/>


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
                onSubmit={onSubmit}
                // newMessageText={newMessageText}
            />
        </div>
    )

}


type FormDataType = {
    newMessageBody: string
}

export default Dialogs
