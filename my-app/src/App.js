import React from "react";          // exact path 22. Урок
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";//Route  19. Уроки // need to install    npm i react-route-dom -save
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UserContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className={"app-wrapper"}>
            <HeaderContainer/>
            <NavBar/>
            <div className={"app-wrapper-content"}>
                {/*<Route path="/profile" component={Profile}/>*/} {/*grum enq renderov vorovhetev piti props tanq isk  component={Profile} depqum chenq kara piti lini render={() => <Profile barev = {props.barev}/>*/}
                <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>          {/* :userId? withRouter props.match.params //60     :userId?:param2:param3?   */}
                <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path={"/users"} render={()=> <UserContainer/>}/>
                <Route path="/news" component={News}/>
                <Route path="/setting" component={Settings}/>
                <Route path={"/friends"} render={() => <FriendsContainer/>}/>
            </div>
        </div>
    )
};
export default App;
