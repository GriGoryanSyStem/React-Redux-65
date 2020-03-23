import React from "react";
import {connect} from "react-redux";
import {profileThunk} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import Profile from "./Profile";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        if (!this.props.match.params.userId) {
            this.props.match.params.userId = 6244
        }
        this.props.profileThunk(this.props.match.params.userId);
    }
    render() {
            return <Profile {...this.props}/>
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
    return {
        store: state.profilePage,
        isAuthLogin: state.auth.isAuth,
    }
};

let ProfileContURL = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
    profileThunk,
})(ProfileContURL);