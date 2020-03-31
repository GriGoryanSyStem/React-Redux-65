import React, {useState} from "react";
import aa from './ProfileInfo.module.css'
import Loader from "../../Common/Loader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import userPhoto from "../../../Pictures/follow_woman.png"

const ProfileInfo = (props) => {
    if (!props.store.profileId) {
        return <Loader/>;
    }
    return (
        <div>
            <div className={aa.flowerGirl}>
                <img
                    src={props.store.profileId.photos.large || userPhoto}
                    alt="my profile MyImage"/>
                {props.match.params.userId === props.myUserLoginId ? <input type={'file'}/> : null}
            </div>
            <ProfileStatusHooks status={props.store.status} updateStatusThunk={props.updateStatusThunk}/>
            <div className={aa.descriptionBlock}>
            </div>
        </div>
    )
};

const ProfileDataInfo = (props) => {
    let profileId = props.profileId;
    return (
        <div>
            <div><b>FullName:</b>{profileId.fullName}</div>
            <br/>
            <div>
                <div><b>Looking for a job : </b> {profileId.lookingForAJob ? 'yes' : 'no'}</div>
                {profileId.lookingForAJob &&
                <div><b>My professional skills : </b> {profileId.lookingForAJobDescription}</div>
                }
                <div><b>About me : </b> {profileId.aboutMe}</div>
                <div><br/><b>Contacts</b>
                    {Object.keys(profileId.contacts).map((keyName, i) => (
                        <li key={i}>
                            <span>{keyName} : {profileId.contacts[keyName]}</span>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
};
const ProfileDataForm = (props) => {
    let profileId = props.profileId;
    return (
        <div>

        </div>
    )
};
export default ProfileInfo;

