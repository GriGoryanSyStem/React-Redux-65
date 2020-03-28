import React from "react";
import {connect} from "react-redux";
import {profileThunk, statusThunk, updateStatusThunk} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        if (!this.props.match.params.userId) {
            this.props.match.params.userId = this.props.myUserLoginId;
            if (!this.props.match.params.userId) {
                this.props.history.push('/login')
            }
        }
        this.props.profileThunk(this.props.match.params.userId);
        this.props.statusThunk(this.props.match.params.userId);
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        store: state.profilePageReducer,
        myUserLoginId: state.authReducer.id,
        isAuth: state.authReducer.isAuth
    }
};

export default compose(
    connect(mapStateToProps, {profileThunk, statusThunk, updateStatusThunk}),
    withRouter)(ProfileContainer);