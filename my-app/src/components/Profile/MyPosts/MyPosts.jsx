import React from "react";
import dd from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../../utilValidation/validators/validator";
import {renderField} from "../../Common/FormsControl/FormsControl";

// import React, {PureComponent}from "react";
// const MyPosts extends React.PureComponent {}
// shouldComponentUpdate(nextProps, nextState, nextContext) {
//     return nextProps != this.props || nextState != this.state;
// } // 87 - shouldComponentUpdate, PureComponent, memo

let maxLength15 = maxLength(15);
let minLength2 = minLength(2);

const MyPosts = (props) => {
    let newArrPostsData = props.postsData.map((index, key) => {
        return (
            <Post key={key} id={index.id} nameGr={index.massage} likesCount={index.likesCount} faceSrc={index.faceSrc}/>
        )
    });

    let addPost = (value) => {
        props.addPostActionCreator(value.TextValue);
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
                <Field component={renderField}
                       name="TextValue"
                       label=' Write Post Massage'
                       validate={[required, maxLength15, minLength2]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};


const AddPostFormRedux = reduxForm({form: 'addMassageForm'})(addNewPostForm);
export default MyPosts;
