import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../components/common/formsControl/Textarea";
import {maxLengthCreator, required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {AppStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength100 = maxLengthCreator(100)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return (
        //внутри props.handleSubmit preventDefault() и props.onSubmit(fromData) - куда закидываем данные из  формы
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={Input}
                       validate={[required, maxLength100]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       type = {'password'}
                       component={Input}
                       validate={[required, maxLength100]}
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

const Login = (props:LoginPropsType) => {


    const onSubmit = (formData: FormDataType) => {
        // debugger
        props.login({email: formData.email, password: formData.password, rememberMe: formData.rememberMe})
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth.isAuth
})


// export default Login
type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: (data: FormDataType) => void
}

export default connect (mapStateToProps, {login})(Login)
