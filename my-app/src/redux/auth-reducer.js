import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let initialState = {
    id: null,
    email:null,
    login:null,
    isAuth:false
};

const authReducer = (state = initialState, action) => {
    if (action.type === 'SET_USER_DATA') {
        return {
            ...state,
            ...action.payload,
        };
    } else {
        return state;
    }
};

export const setUserData = (id,email,login,isAuth) => (
    {type:'SET_USER_DATA', payload:{id,email,login,isAuth}});

export const authThunk = () => {
    return (dispatch) => {
        authAPI.authMe().then(response=>{
        if(response.data.resultCode === 0){
            let {id,email,login} = response.data.data;
            dispatch(setUserData(id,email,login,true));
        }
    })}
};
export const loginThunk = (email,password,rememberMe) => {
    return (dispatch) => {
        authAPI.loginApi(email,password,rememberMe).then(response=>{
        if(response.data.resultCode === 0){
            dispatch(authThunk());
        }else {
            dispatch(stopSubmit('login',{_error:"Something is wrong"})); // 79 stopSubmit (redux-form)
        }
    })}
};
export const logOutThunk = () => {
    return (dispatch) => {
          authAPI.logOutApi().then(response=>{
        if(response.data.resultCode === 0){
            dispatch(setUserData(null,null,null,false));
        }
    })}
};

export default authReducer;