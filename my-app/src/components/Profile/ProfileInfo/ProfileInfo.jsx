import React, {useState} from "react";
import aa from './ProfileInfo.module.css'
import Loader from "../../Common/Loader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import userPhoto from "../../../Pictures/follow_woman.png"
import ProfileFormReduxForm from "./ProfileForm";
import {ProfileDataInfo} from "./ProfileDataInfo";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    if (!props.store.profileInformation) {
        return <Loader/>;
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhotoTK(e.target.files[0])
        }
    };
    let onSaveSubmit = (formData) => {
        // console.log(formData);
        props.saveFormDataTK(formData); //  formData = object
        setEditMode(false)
    };
    return (
        <div>
            <div className={aa.flowerGirl}>
                <img
                    src={props.store.profileInformation.photos.large || userPhoto}
                    alt="my profile MyImage"/>
                {props.match.params.userId === props.myUserLoginId ?
                    <input type={'file'} onChange={onMainPhotoSelected}/> : null}
            </div>
            {editMode
                ? <ProfileFormReduxForm initialValues = {props.store.profileInformation} onSubmit={onSaveSubmit}/>
                : <ProfileDataInfo profileInformation={props.store.profileInformation}
                                   isOwner={props.match.params.userId}
                                   goToEditMode={() => {setEditMode(true)}}
                />
            }
            <ProfileStatusHooks status={props.store.status} updateStatusThunk={props.updateStatusThunk}/>
            <div className={aa.descriptionBlock}>
            </div>
        </div>
    )
};

export default ProfileInfo;

