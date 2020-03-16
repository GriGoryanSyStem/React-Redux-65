import React from "react";
import User from "./User";
import Loader from "../Common/Loader";
import {connect} from "react-redux";
import {
    followThunkAC,
    unFollowThunkAC,
    getUsersThunkCreator, followThunkCreator, unFollowThunkCreator
} from "../../redux/users-reducer";


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunkCreator_S(this.props.currentPage, this.props.pageSize); //66
    }

    onPageChangeFunc = (p) => {
        this.props.getUsersThunkCreator_S(p, this.props.pageSize);
    };

    render() {
        return (
            <div>
                {this.props.store.isLoading
                    ? <Loader/>
                    : <User  {...this.props} onPageChangeFunc={this.onPageChangeFunc}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.usersPage);
    return {
        store: state.usersPage,
    }
};

const UserContainerConnect = connect(mapStateToProps, {
    folAC: followThunkAC,
    unFolAC: unFollowThunkAC,
    getUsersThunkCreator_S: getUsersThunkCreator,
    followThunkCreator_S: followThunkCreator,
    unFollowThunkCreator_S: unFollowThunkCreator
})(UsersContainer);

export default UserContainerConnect;