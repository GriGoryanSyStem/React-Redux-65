import React from "react";
import dd from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required,maxLength, minLength} from "../../../utilValidation/validators/validator";
import {Textarea} from "../../Common/FormsControl/FormsControl";


let maxLength15 = maxLength(15);
let minLength2 = minLength(2);

const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="TextValue" placeholder=' Write Post Massage'
                       validate={[required, maxLength15, minLength2]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const MyPosts = (props) => {
    let newArrPostsData = props.store.profilePage.postsData.map((index, key) => {
        return (
            <Post key={key} id={index.id} nameGr={index.massage} likesCount={index.likesCount} faceSrc={index.faceSrc}/>
        )
    });

    let addPost = (value) => {
        props.addPostProp(value.TextValue);
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

const AddPostFormRedux = reduxForm({form: 'addMassageForm'})(addNewPostForm);

export default MyPosts;
