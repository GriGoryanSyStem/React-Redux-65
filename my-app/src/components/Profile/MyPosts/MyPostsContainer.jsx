import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator} from "../../../redux/profile-reducer";  // Урок 14. // don't use << _ >> && << - >> in css style. f.ex. _header or my-header;

const mapStateToProps = (state) => {
    return {
        // state:state,
        postsData:state.profilePageReducer.postsData,
        textPostValue:state.profilePageReducer.textPostValue

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