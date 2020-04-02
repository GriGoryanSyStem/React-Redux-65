import React from "react";
import c from "./FormsControl.module.css";

export const renderField = ({input, label, type, meta, rows, cols}) => {
    return (
        <div className={c.formControl + " " + (meta.touched && meta.error ? c.error : "")}>
            {type === 'textarea'
                ? <textarea {...input} placeholder={label} type={type} rows={rows} cols={cols}/>
                : <input {...input} placeholder={label} type={type}/>
            }
            {
            meta.touched
                ? (meta.error && <span className={c.requiredError}>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>)
                : ''
            }
        </div>
    )
};