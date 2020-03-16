import {applyMiddleware, combineReducers, createStore} from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";// 42 - React
import usersReducer from "./users-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendsReducer from "./myallfriends-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    sidebarPage : sidebarReducer,
    myAllFriends : friendsReducer,
    auth : authReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;