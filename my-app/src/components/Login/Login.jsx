import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    console.log(props)
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={'input'} name ={'login'} placeholder="login"/></div>
                <div>
                    <Field component={'input'} name ={'password'} placeholder="password"/></div>
                <div>
                    <Field component={'input'} name ={'rememberMe'} type="checkbox"/> Remember Me</div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = () => {
    const onSubmit = (formData)=>{
        console.log(formData)
    };
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};


export default Login;