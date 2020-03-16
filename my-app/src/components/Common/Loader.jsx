import React from "react";
import img from "../../Pictures/Spinner-1s-200px.gif";

let Loader = (props) =>{
    return(
        <div>
            <img src={img} alt="loading"/>
        </div>
    )
};
export default Loader;