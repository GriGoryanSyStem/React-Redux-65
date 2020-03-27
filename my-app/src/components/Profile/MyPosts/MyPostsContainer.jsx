import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";  // Урок 14. // don't use << _ >> && << - >> in css style. f.ex. _header or my-header;

const mapStateToProps = (state) => {
    return {
        // state:state,
        postsData:state.profilePage.postsData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreator:(value)=>{
            dispatch(addPostActionCreator(value));
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;