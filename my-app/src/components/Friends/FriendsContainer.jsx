import {connect} from "react-redux";
import Friends from "./Friends";

const mapStateProps = (state) => {
    return {
        storeGetStateProps: state
    }
};
const mapDispatchProps = (dispatch) => {
    return {
        dispatchProps:dispatch,
    }
};
const FriendsContainer = connect(mapStateProps, mapDispatchProps)(Friends);
export default FriendsContainer;
