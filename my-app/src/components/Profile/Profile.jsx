import React from "react";
import MyPosts from "./MyPosts/MyPosts"; // Урок 14. // don't use << _ >> && << - >> in css style. f.ex. _header or my-header;
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo {...props} />
            <MyPostsContainer />
        </div>
    )
};
export default Profile;
