import React from "react";
import fr from "./Friends.module.css";
import Friend from "./Friend/Friend";


const Friends = (props) => {
    debugger
    console.log(props);
    let CreateFriendsArr = props.storeGetStateProps.myFriendsPageReducer.countFriends.map((index, key) => {
        return (
            <Friend key={key} id={index.id} name={index.name} newSrc={index.crImageSrc}/>
        )
    });

 let addFriend = () => {
     console.log(`${CreateFriendsArr} CreateFriendsArr` )
 };

    return (
        <div className={fr.mainFriends}>
            <div className={fr.imgContainer}>
                <img src="https://placester.com/wp-content/uploads/2012/08/url.jpg" alt="alt"/>
            </div>
            <div>
                {CreateFriendsArr}
                <button onClick={addFriend}>Add Friend</button>
            </div>
        </div>
    )
};

export default Friends;
