import {authThunk} from "./auth-reducer";

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    if (action.type === 'INITIALIZED') {
        return {
            ...state,
            initialized: true,
        };
    } else {
        return state;
    }
};

export const initializedSuccess = () => (
    {type: 'INITIALIZED'});

export const initializedAppThunk = () => {
    return (dispatch) => {
        let promise = dispatch(authThunk());
        Promise.all([promise]).then(()=>{
            dispatch(initializedSuccess());
        });
    }
};

export default appReducer;