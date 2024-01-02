import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import styles from './formControl.module.css'
import {required} from "../../../utils/validators/validators";

type FormDataType = {
    newPostText: string
}


export const FormControl: React.FC<InjectedFormProps<FormDataType> & any> = ({input, meta:{touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )

}

export const Input: React.FC<InjectedFormProps<FormDataType> & any> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps}/></FormControl>
}
export const Textarea: React.FC<InjectedFormProps<FormDataType> & any> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder:string | null, name:string, component:any, validators: Array<any>, props: {}, text: string ) =>
    <div><Field placeholder={placeholder}
              name={name}
              component={component}
              validate={validators}
                {...props}
    />{text}
    </div>

