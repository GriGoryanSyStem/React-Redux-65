import React from "react";
import fr from "./../Friends.module.css";


const Friend = (props) => {
    return (
        <div>
            <div className={fr.contentDiv}>
                <div><img src={props.newSrc} alt="alt" className={fr.itemImg}/></div>
                <div><h4>{props.name} </h4></div>
            </div>
        </div>
    )
};


export default Friend;