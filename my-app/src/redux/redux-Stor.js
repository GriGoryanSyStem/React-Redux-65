import {applyMiddleware, combineReducers, createStore} from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";// 42 - React
import usersReducer from "./users-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendsReducer from "./myallfriends-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePageReducer: profileReducer,
    dialogsPageReducer: dialogsReducer,
    usersPageReducer:usersReducer,
    sidebarPageReducer : sidebarReducer,
    myFriendsPageReducer : friendsReducer,
    authReducer : authReducer,
    appReducer: appReducer,
    form: formReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;