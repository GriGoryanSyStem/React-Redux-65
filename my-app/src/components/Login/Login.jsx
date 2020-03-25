import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import Redirect from "react-router-dom/es/Redirect";
import {email, maxLength, minLength, required} from "../../utilValidation/validators/validator";
import {renderField} from "../Common/FormsControl/FormsControl";
import c from '../Common/FormsControl/FormsControl.module.css'


let maxLength30 = maxLength(30);
let minLength5 = minLength(5);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.login, formData.password, formData.rememberMe)
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    } else {
        return (
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        )
    }
};

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={renderField} name={'login'} type="email" validate={email} label='email'/></div>
                <div>
                    <Field component={renderField} name={'password'} type="password" label='password'
                           placeholder="password" validate={[required, maxLength30, minLength5]}/></div>
                <div>
                    <Field component={renderField} name={'rememberMe'} type="checkbox"/> Remember Me
                </div>
               { props.error &&
               <div className={c.formSummaryError}>
                    {props.error}
                </div>
               }
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth  //68 Redirect
    }
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
export default connect(mapStateToProps, {loginThunk})(Login);