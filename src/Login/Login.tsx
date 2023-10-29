import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../components/common/formsControl/Textarea";
import {maxLengthCreator, required} from "../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength10 = maxLengthCreator(10)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        //внутри props.handleSubmit preventDefault() и props.onSubmit(fromData) - куда закидываем данные из  формы
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'login'}
                       component={Input}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={Input}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <Field type="checkbox"
                       name={'rememberMe'}
                       component={Input}
                />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        debugger
        console.log(formData) //сообщает во внешний мир, что собрали данные
    }
    return <div>
        <h1>login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login