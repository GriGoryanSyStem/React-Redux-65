import {UsersAPI} from "../api/api";

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
    newPostText: 'it-kamasutra.com text',
    profileId: null,
};


export const addPostActionCreator = () => {  //39 - Уроки
    return {type: 'ADD-POST',}
};
export const updateNewPostTextActionCreator = (param) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: param}
};
export const setApiDataAC = (profileId) => {
    return {type: 'SET-API-DATA', profileId}
};
export const profileThunk = (userId)=>{
    return(dispatch)=>{
        UsersAPI.getProfileApi(userId).then(response => {
            dispatch(setApiDataAC(response.data));
        });
    }
}


const profileReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE-NEW-POST-TEXT') {
        let stateCopy = {...state};
        stateCopy.newPostText = action.newText;
        return stateCopy;
    } else if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            massage: state.newPostText,
            likesCount: 2020,
            faceSrc: 'https://c.stocksy.com/a/LXL500/z9/1274431.jpg?1578827516'
        };
        let stateCopytwo = {...state};
        stateCopytwo.postsData = [...state.postsData];
        stateCopytwo.postsData.push(newPost);
        stateCopytwo.newPostText = '';
        return stateCopytwo;
    }
    else if(action.type === 'SET-API-DATA'){
        return{
            ...state,
            profileId:action.profileId,
        }
    }
    else {
        return state;
    }
};


export default profileReducer;  //41 - React