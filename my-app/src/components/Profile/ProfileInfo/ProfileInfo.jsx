import React from "react";
import aa from './ProfileInfo.module.css'
import Loader from "../../Common/Loader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if(!props.store.profileId){
        return <Loader/>;
    }
    return (
        <div>
            <div className={aa.flowerGirl}>
                <img
                    src={props.store.profileId.photos.large}
                    alt="pic"/>
            </div>
            <div>{props.store.profileId.fullName}</div>

            <ProfileStatus status = {props.store.status} updateStatusThunk = {props.updateStatusThunk}/>

            <div className={aa.desctiptionBlock}>

            </div>
        </div>
    )
};
export default ProfileInfo;

