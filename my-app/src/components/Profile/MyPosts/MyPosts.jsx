import React from "react";
import dd from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let newArrPostsData = props.store.profilePage.postsData.map((index, key) => {
        return (
            <Post key={key} id={index.id} nameGr={index.massage} likesCount={index.likesCount} faceSrc={index.faceSrc}/>
        )
    });

    let addPost = (val) => {
        props.addPostProp(val.TextValue);
    };

    return (
        <div className={dd.postsBlock}>
            <AddPostFormRedux onSubmit={addPost}/>
            <div className={dd.posts}>
                {newArrPostsData}
            </div>
        </div>
    )
};

const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name="TextValue" placeholder='add new post text'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};
const AddPostFormRedux = reduxForm({form: 'addMassageForm'})(addNewPostForm);
export default MyPosts;
