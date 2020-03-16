import React from "react";
import aa from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${aa.dialogs} ${aa.active}`}>
            <div className={aa.usersPicDiv}><img src={props.avatarSrc} alt="alt" className={aa.avatarImg}/></div>
            <div className={aa.usersNameDiv}> <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
        </div>
    )
};



export default DialogItem;