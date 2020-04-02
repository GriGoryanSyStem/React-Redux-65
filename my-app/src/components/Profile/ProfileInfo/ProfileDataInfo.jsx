import React from "react";

export const ProfileDataInfo = (props) => {
    let profileInformation = props.profileInformation;
    return (
        <div>{props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
            <div><b>FullName:</b>{profileInformation.fullName}</div>
            <br/>
            <div>
                <div>
                    <b>Looking for a job : </b>
                    {profileInformation.lookingForAJob ? 'yes' : 'no'}
                </div>
                {profileInformation.lookingForAJob &&
                <div>
                    <b>My professional skills : </b>
                    {profileInformation.lookingForAJobDescription}
                </div>
                }
                <div>
                    <b>About me : </b>
                    {profileInformation.aboutMe}
                </div>
                <div>
                    <br/><b>Contacts</b>
                    {Object.keys(profileInformation.contacts).map((keyName, i) => (
                        <li key={i}>
                            <span>{keyName} : {profileInformation.contacts[keyName]}</span>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
};
