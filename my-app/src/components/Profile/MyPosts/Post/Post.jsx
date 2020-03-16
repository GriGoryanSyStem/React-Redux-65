import React from "react";
import ee from './Post.module.css'; // Урок 14. // don't use << _ >> && << - >> in css style. f.ex. _header or my-header;

const Post = (props) => {
    return (
        <div className={ee.item}>
            <div><img src={props.faceSrc} alt="pic"/></div>
            <div><p>{props.nameGr}</p></div>
            <div><span>{props.likesCount}</span></div>
        </div>
    )
};
export default Post;

