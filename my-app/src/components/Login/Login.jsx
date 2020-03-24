import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../utilValidation/validators/validator";
import {Element} from "../Common/FormsControl/FormsControl";

let maxLength30 = maxLength(30);
let minLength5 = minLength(5);
const InputType = Element('input');

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm />
        </div>
    )
};

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={InputType} name ={'login'} placeholder="login" validate={[required, maxLength30, minLength5]}/></div>
                <div>
                    <Field component={InputType} name ={'password'} placeholder="password" validate={[required, maxLength30, minLength5]}/></div>
                <div>
                    <Field component={'input'} name ={'rememberMe'} type={"checkbox"} /> Remember Me</div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
export default Login;