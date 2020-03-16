import React from "react";
import aa from './../Dialogs.module.css';

const Massages = (props) => {
    return (
        <div className={aa.massage}>{props.text}</div>
    )
};

export default Massages;