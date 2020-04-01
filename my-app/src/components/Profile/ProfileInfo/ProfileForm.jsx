import {renderField} from "../../Common/FormsControl/FormsControl";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../../utilValidation/validators/validator";

let maxLength30 = maxLength(30);
let minLength1 = minLength(1);

const ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <button>Save</button>
            <div>
                <span><b>FullName:</b></span>
                <Field component={renderField}
                       name="fullName"
                       type='text'
                       label='Your Full Name'
                       validate={[required, maxLength30, minLength1]}/>
            </div>
            <div>
                <span><b>Looking for a job :</b></span>
                <Field component={renderField}
                       type={'checkbox'}
                       name="lookingForAJob"/>
            </div>
            <div>
                <span><b>My professional skills : </b></span>
                <Field component={renderField}
                       type={'textarea'}
                       name="lookingForAJobDescription"
                       label='Professional skills'
                       rows={'5'} cols={'20'}/>

            </div>
            <div>
                <span><b>About me : </b></span>
                <Field component={renderField}
                       type={'textarea'}
                       name="AboutMe"
                       label='About me'
                       rows={'5'} cols={'20'}/>
            </div>
        </form>
    )
};
const ProfileFormReduxForm = reduxForm({form: 'editProfileForm'})(ProfileForm);
export default ProfileFormReduxForm;