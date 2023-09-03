import React from "react";
import {Field, reduxForm} from "redux-form";


const LoginForm = (props: any) => {

    return (
        //внутри props.handleSubmit preventDefault() и props.onSubmit(fromData) - куда закидываем данные из  формы
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={'input'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm  = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData:any) => {
        console.log(formData) //сообщает во внешний мир, что собрали данные
    }
    return <div>
        <h1>login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login