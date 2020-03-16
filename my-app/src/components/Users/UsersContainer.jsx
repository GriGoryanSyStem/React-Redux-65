import React from "react";
import {
    currentPageAC,
    followAC,
    setTotalAC,
    setUsersAC,
    toggleIsLoadingAC,
    unFollowAC,
    followButtonDisableAC
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import User from "./User";
import Loader from "../Common/Loader";
import {UserApiContClass} from "../../api/api"; //63 DAL, axios.create

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        UserApiContClass.getUsersApi(this.props.currentPage, this.props.pageSize).then(data => {   //52
            // console.log(response.data.items);
            this.props.setUs(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChangeFunc = (p) => {
        this.props.toggleLoad(true);
        this.props.currentPageFunc(p);

        UserApiContClass.getUsersApi(p, this.props.pageSize).then(data => {
            // console.log(response.data.items);
            this.props.setUs(data.items);
            this.props.toggleLoad(false);
        });
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

// const mapDispatchToProps = (dispatch) => {
//     return {}
// };

const UserContainerConnect = connect(mapStateToProps, {
    folAC: followAC,
    unFolAC: unFollowAC,
    setUs: setUsersAC,
    currentPageFunc: currentPageAC,
    setTotalUsersCount: setTotalAC,
    toggleLoad: toggleIsLoadingAC,
    folButDisAC: followButtonDisableAC
})(UsersContainer);

export default UserContainerConnect;