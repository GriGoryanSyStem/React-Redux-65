import React from "react";
import User from "./User";
import {connect} from "react-redux";
import {followThunk, getUsersThunkCreator, unFollowThunk,} from "../../redux/users-reducer";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator_S(this.props.currentPage, this.props.pageSize); //66
    }

    onPageChangeFunc = (p) => {
        this.props.getUsersThunkCreator_S(p, this.props.pageSize);
    };

    render() {
        return (
            <div>
                <User {...this.props} onPageChangeFunc={this.onPageChangeFunc}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        // store: state.usersPageReducer,
        isLoading: state.usersPageReducer.isLoading,
        totalUsersCount: state.usersPageReducer.totalUsersCount,
        pageSize: state.usersPageReducer.pageSize,
        currentPage: state.usersPageReducer.currentPage,
        users: state.usersPageReducer.users,
        folElemArr: state.usersPageReducer.folElemArr,
    }
};
export default compose(
    connect(mapStateToProps, {
        getUsersThunkCreator_S: getUsersThunkCreator,
        followThunkCreator_S: followThunk,
        unFollowThunkCreator_S: unFollowThunk
    }))(UsersContainer);