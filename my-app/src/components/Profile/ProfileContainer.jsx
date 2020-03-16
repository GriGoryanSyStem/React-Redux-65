import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setApiDataAC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";

class  ProfileContainer extends React.Component {

    componentDidMount() {
        if (!this.props.match.params.userId){
            this.props.match.params.userId = 6244
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`).then(response => {
            this.props.setApiDataAC(response.data);
            // console.log(response);
        });
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
          store : state.profilePage,
    }
};

let ProfileContURL =  withRouter(ProfileContainer);

export default connect (mapStateToProps,{
    setApiDataAC,
})(ProfileContURL);