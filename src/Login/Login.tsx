import React from "react";
import {reduxForm} from "redux-form";


const LoginForm = (props: any) => {
    return (
        <form>
            <div>
                <input placeholder={'Login'}/>
            </div>
            <div>
                <input placeholder={'Password'}/>
            </div>
            <div>
                <input type="checkbox"/>remember me
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
    return <div>
        <h1>login</h1>
        <LoginReduxForm/>
    </div>
}

export default Login