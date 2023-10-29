import React from "react";
import {InjectedFormProps} from "redux-form";
import styles from './formControl.module.css'

type FormDataType = {
    newPostText: string
}


export const FormControl: React.FC<InjectedFormProps<FormDataType> & any> = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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