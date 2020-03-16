import React from "react";
import dd from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    // console.log(props);
    let newPostElement = React.createRef();
    let newArrPostsData = props.store.profilePage.postsData.map((index, key) => {
        return (
            <Post key={key} id={index.id} nameGr={index.massage} likesCount={index.likesCount} faceSrc={index.faceSrc}/>
        )
    });

    let addPost = () => {
        props.addPostProp();
    };

    let onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value);
    };

    return (
        <div className={dd.postsBlock}>
            <div>
                <div>
                    <textarea onChange={onPostChange} name="newArea" ref={newPostElement} cols="20" rows="5"
                              value={props.store.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={dd.posts}>
                {newArrPostsData}
            </div>
        </div>
    )
};
export default MyPosts;
