import React, {useEffect, useState} from "react";
import c from './ProfileInfo.module.css'

const ProfileStatusHooks = (props) => {


    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.state);

   useEffect(() => {
       setStatus(props.status)
   },[props.status]);

    const activateEditMode = () => {
        setEditMode(!editMode);
        props.updateStatusThunk(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div className={c.statusContainerDiv}>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "------ No Status ------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input value={status} onBlur={activateEditMode} onChange={onStatusChange} autoFocus={true}/>
            </div>
            }
        </div>
    )
};
export default ProfileStatusHooks;

