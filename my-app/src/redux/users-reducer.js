import {UserApiContClass} from "../api/api";

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    folElemArr: []
};

// console.log(initialState.users);

export const followThunkAC = (userId) => ({type: 'FOLLOW', userId});
export const unFollowThunkAC = (userId) => ({type: 'UN_FOLLOW', userId});
export const setUsersAC = (users) => ({type: 'SET_USERS', users});
export const currentPageAC = (pageNumber) => ({type: 'CURRENT_PAGE', pageNumber});
export const setTotalAC = (TC) => ({type: 'TOTAL_USERS_COUNT', TC});
export const toggleIsLoadingAC = (bool) => ({type: "TOGGLE_IS_LOADING", bool});
export const followButtonDisableAC = (isFetching, userId) => ({type: "BUTTON_DISABLE", isFetching, userId});


export const getUsersThunkCreator = (currentPage = 1,pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsLoadingAC(true));
        UserApiContClass.getUsersApi(currentPage, pageSize).then(data => {   //52
            dispatch(currentPageAC(currentPage));
            dispatch(toggleIsLoadingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalAC(data.totalCount));
        });
    }
};

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(followButtonDisableAC(true,userId));
        UserApiContClass.followApi_2(userId).then(data => {   //52
            if(data.resultCode == 0){
                dispatch(followThunkAC(userId));
            }
            dispatch(followButtonDisableAC(false,userId));
        });
    }
};
export const unFollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(followButtonDisableAC(true,userId));
        UserApiContClass.unFollowApi_3(userId).then(data => {   //52
            if(data.resultCode == 0){
                dispatch(unFollowThunkAC(userId));
            }
            dispatch(followButtonDisableAC(false,userId));
        });
    }
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case 'UN_FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case 'SET_USERS': {
            return {...state, users: action.users}
        }
        case 'CURRENT_PAGE': {
            return {...state, currentPage: action.pageNumber}
        }
        case 'TOTAL_USERS_COUNT': {
            return {...state, totalUsersCount: action.TC}
        }
        case 'TOGGLE_IS_LOADING': {
            return {...state, isLoading: action.bool}
        }
        case 'BUTTON_DISABLE': {
            return {
                ...state,
                folElemArr: action.isFetching
                    ? [...state.folElemArr, action.userId]
                    : state.folElemArr.filter(elemId => elemId !== action.userId)
            }
        }
        default:
            return state;
    }
};

export default usersReducer;