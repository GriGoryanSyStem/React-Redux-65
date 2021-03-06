import {ProfileAPI, UsersAPI} from "../api/api";

let initialState = {
    postsData: [
        {
            id: 1,
            massage: 'Hi, Narek how are you',
            likesCount: 12,
            faceSrc: 'https://c.stocksy.com/a/LXL500/z9/1274431.jpg?1578827516'
        },
        {
            id: 2,
            massage: 'Hi, Ani, whats-app',
            faceSrc: 'https://i.pinimg.com/originals/47/84/ce/4784ce85dfdd3e1eede6e0b264a6d567.jpg',
            likesCount: 18
        },
        {
            id: 3,
            massage: 'Hi, David, ok',
            likesCount: 111,
            faceSrc: 'https://img4.goodfon.ru/wallpaper/nbig/2/b9/deekshitha-bollywood-actress-celebrity-model-girl-beautiful.jpg'
        }
    ],
    profileInformation: null,
    status: "",
};


export const profileThunk = (userId) => async (dispatch) => {
    let response = await UsersAPI.getProfileApi(userId);
    dispatch(setApiDataAC(response.data));
};
export const statusThunk = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getStatusApi(userId);
    dispatch(setStatusAC(response.data));
};
export const savePhotoTK = (file) => async (dispatch) => {
    let response = await ProfileAPI.savePhotoApi(file);
    dispatch(setPhotoAC(response.data.data.photos));
};
export const saveFormDataTK = (formData) => async (dispatch, getState) => {
    const userId = getState().authReducer.id;
    const response = await ProfileAPI.saveFormDataApi(formData);
    if (response.data.resultCode === 0) {
        dispatch(profileThunk(userId));
        debugger
    }
};
export const updateStatusThunk = (status) => {
    return (dispatch) => {
        ProfileAPI.UpdateStatusApi(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
        });
    }
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                massage: action.value,
                likesCount: 2020,
                faceSrc: 'https://c.stocksy.com/a/LXL500/z9/1274431.jpg?1578827516'
            };
            let Copy = {...state};
            Copy.postsData = [...state.postsData];
            Copy.postsData.push(newPost);

            return Copy;
        case 'SET-API-DATA':
            return {
                ...state,
                profileInformation: action.profileInformation,
            };
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status,
            };
        case 'SAVE-PHOTOS':
            return {
                ...state,
                profileInformation: {...state.profileInformation, photos:action.photos, contacts() {

                    }
                },
            };
        default:
            return state;
    }
};

export const addPostActionCreator = (value) => {  //39 - Уроки
    return {type: 'ADD-POST', value}
};
export const setApiDataAC = (profileInformation) => {
    return {type: 'SET-API-DATA', profileInformation}
};
export const setStatusAC = (status) => {
    return {type: 'SET-STATUS', status}
};
export const setPhotoAC = (photos) => {
    return {type: 'SAVE-PHOTOS', photos}
};

export default profileReducer;  //41 - React