import React from "react";
import {connect} from "react-redux";
import {profileThunk} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import withRouter from "react-router-dom/es/withRouter";
import {compose} from "redux";

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

let mapStateToProps = (state) => {
    return {
        store: state.profilePage,
        isAuthLogin: state.auth.isAuth,
    }
};

export default compose(
    connect(mapStateToProps, {profileThunk}),withRouter)(ProfileContainer);