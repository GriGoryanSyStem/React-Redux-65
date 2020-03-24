import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControl/FormsControl";
import {maxLength, minLength, required} from "../../utilValidation/validators/validator";

let maxLength30 = maxLength(30);
let minLength5 = minLength(5);


const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input} name ={'login'} placeholder="login" validate={[required, maxLength30, minLength5]}/></div>
                <div>
                    <Field component={Input} name ={'password'} placeholder="password" validate={[required, maxLength30, minLength5]}/></div>
                <div>
                    <Field component={'input'} name ={'rememberMe'} type={"checkbox"} /> Remember Me</div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
};

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

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
export default Login;