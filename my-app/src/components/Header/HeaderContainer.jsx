import React from "react";
import Header from "./Header";
import {logOutThunk} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    render() {
        return (
                <Header {...this.props}/>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        isAuth : state.authReducer.isAuth,
        login: state.authReducer.login
    }
};

export default connect(mapStateToProps,{logOutThunk})(HeaderContainer);

