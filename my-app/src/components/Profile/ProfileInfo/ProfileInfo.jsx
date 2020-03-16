import React from "react";
import aa from './ProfileInfo.module.css'
import Loader from "../../Common/Loader";


const ProfileInfo = (props) => {
    if(!props.profileId){
        return <Loader/>;
    }
    // console.log(props.profileId);
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

