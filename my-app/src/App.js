import React from "react";          // exact path 22. Урок
import "./App.css";
import {Route, withRouter} from "react-router-dom";//Route  19. Уроки // need to install    npm i react-route-dom -save
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UserContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedAppThunk} from "./redux/app-reducer";
import Loader from "./components/Common/Loader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializedAppThunk();
    }

    render() {
        if(!this.props.initialized){
            return <Loader/>;
        }
        return (
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    {/*<Route path="/profile" component={Profile}/>*/} {/*grum enq renderov vorovhetev piti props tanq isk  component={Profile} depqum chenq kara piti lini render={() => <Profile barev = {props.barev}/>*/}
                    <Route path="/profile/:userId?" render={() =>
                        <ProfileContainer/>}/> {/* :userId? withRouter props.match.params //60     :userId?:param2:param3?   */}
                    <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path={"/users"} render={() => <UserContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/setting" component={Settings}/>
                    <Route path={"/friends"} render={() => <FriendsContainer/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    initialized:state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps,{initializedAppThunk}))(App); //null vortev mapstateToProps chunenq
