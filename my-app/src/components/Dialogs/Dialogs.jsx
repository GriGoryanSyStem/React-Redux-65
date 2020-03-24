import React from "react";
import aa from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Massages from "./Massage/Massages";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControl/FormsControl";
import {maxLength, minLength, required} from "../../utilValidation/validators/validator";

const Dialogs = (props) => {
    let storeGetState = props.storeGetState.dialogsPage;
    let DialogsItemElem = storeGetState.dialogsData.map((i, k) => <DialogItem key={k} name={i.name} id={i.id}
                                                                              avatarSrc={i.avatarSrc}/>);
    let MessageElem = storeGetState.messagesData.map((i, k) => <Massages key={k} text={i.massage} id={i.id}/>);

    let onClickMassage = (newMassageBody) => {
        props.onClickMassage(newMassageBody);  //40 - React
    };
    if (props.isAuthLogin === false) {
        return <Redirect to={'/login'}/>
    }
    let addNewMassage =(valueForm)=>{
        onClickMassage(valueForm.newMassageBody);
    };

    return (
        <div>
            <div className={aa.dialogs}>
                <div className={aa.dialogsItems}>
                    {DialogsItemElem}
                </div>
                <div className={aa.massages}>
                    <div>{MessageElem}</div>
                </div>
            </div>
            <AddMassageFormRedux onSubmit ={addNewMassage}/>
        </div>
    )
};

let maxLength30 = maxLength(30);
let minLength1 = minLength(1);

const AddMassageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  component ={Textarea}
                        name = "newMassageBody"
                        placeholder='enter your massage'
                        validate={[required, maxLength30, minLength1]}/>
               </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

const AddMassageFormRedux = reduxForm({form: 'dialogAddMassageForm'})(AddMassageForm);

export default Dialogs;
