import React from "react";
import {connect} from "react-redux";
import {profileThunk} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        if (!this.props.match.params.userId) {
            this.props.match.params.userId = 6244
        }
        this.props.profileThunk(this.props.match.params.userId);
    }
    render() {
        if (this.props.isAuthLogin === false) {
            return <Redirect to={'/login'}/>
        } else {
            return <Profile {...this.props}/>
        }
    }
}
let mapStateToProps = (state) => {
    return {
        store: state.profilePage,
        isAuthLogin: state.auth.isAuth,
    }
};

let ProfileContURL = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    profileThunk,
})(ProfileContURL);