import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";  // Урок 14. // don't use << _ >> && << - >> in css style. f.ex. _header or my-header;




const mapStateToProps = (state) => {
    return {
        store: state,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText:(text2)=>{
            dispatch(updateNewPostTextActionCreator(text2));
        },
        addPostProp:()=>{
            dispatch(addPostActionCreator());
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;