// don't use << _ >> && << - >> in css style. f.ex. _header or my-header;
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
        return (
            <div>
                <ProfileInfo {...props} />
                <MyPostsContainer />
            </div>
        )
};
export default Profile;
