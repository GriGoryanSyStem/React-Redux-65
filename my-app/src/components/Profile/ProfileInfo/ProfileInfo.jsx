import React from "react";
import aa from './ProfileInfo.module.css'
import Loader from "../../Common/Loader";
import {Redirect} from "react-router-dom";


const ProfileInfo = (props) => {
    if(!props.profileId){
        return <Loader/>;
    }
    return (
        <div>
            <div className={aa.flowerGirl}>
                <img
                    src={props.profileId.photos.large}
                    alt="pic"/>
            </div>
            <div>{props.profileId.fullName}</div>
            <div className={aa.desctiptionBlock}>

            </div>
        </div>
    )
};
export default ProfileInfo;

