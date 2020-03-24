import React from "react";
import c from "./FormsControl.module.css";

export const Textarea = ({input,meta}) => {  //77 https://redux-form.com/8.3.0/examples/fieldlevelvalidation/
    return(
        <div className={c.formControl + " " + (meta.touched && meta.error ? c.error : '')}>
            <div><textarea {...input}/></div>
            <div>{meta.touched && meta.error && <span>! Error {meta.error}</span>}</div>
        </div>
    )
};

export const Input = ({input,meta}) => {  //77 https://redux-form.com/8.3.0/examples/fieldlevelvalidation/
    return(
        <div className={c.formControl + " " + (meta.touched && meta.error ? c.error : '')}>
            <div><input {...input}/></div>
            <div>{meta.touched && meta.error && <span>! Error {meta.error}</span>}</div>
        </div>
    )
};
//
// export const Element = Element => ({ input, meta}) => {
//     return (
//         <div className={ c.formControl + " " + (meta.touched && meta.error ? c.error : "") }>
//             <Element {...input} />
//             { meta.touched && meta.error && <span> { meta.error } </span> }
//         </div>
//     );
// };