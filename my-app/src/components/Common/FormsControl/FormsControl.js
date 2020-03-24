import React from "react";
import c from "./FormsControl.module.css";

export const Element = (InputType) => ({input,meta}) => { // 77 - React JS - redux-form field validation https://redux-form.com/8.3.0/examples/fieldlevelvalidation/
    return (
        <div className={c.formControl +" "+ (meta.touched && meta.error ? c.error : "")}>
            <InputType {...input} />
            {meta.touched && meta.error && <span> {meta.error} </span>}
        </div>
    );
};