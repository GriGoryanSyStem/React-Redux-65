import React from "react";
import c from "./FormsControl.module.css";

export const renderField = ({input, label, type, meta}) => {
    return (
        <div className={c.formControl + " " + (meta.touched && meta.error ? c.error : "")}>
            <input {...input} placeholder={label} type={type}/>
            {meta.touched && (meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>)}
        </div>
    );
}