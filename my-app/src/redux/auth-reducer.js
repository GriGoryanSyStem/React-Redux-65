import {authAPI} from "../api/api";

let initialState = {
    id: null,
    email:null,
    login:null,
    isAuth:false
};

export const setUserData = (id,email,login) => ( {type:'SET_USER_DATA', data:{id,email,login} });
export const authThunk = () => {
    return (dispatch) => {
        authAPI.authMe().then(response=>{
        if(response.data.resultCode === 0){
            let {id,email,login} = response.data.data;
            dispatch(setUserData(id,email,login));
        }
    })}
};


const authReducer = (state = initialState, action) => {
    if (action.type === 'SET_USER_DATA') {
        return {
            ...state,
            ...action.data,
            isAuth: true
        };
    } else {
        return state;
    }
};

export default authReducer;