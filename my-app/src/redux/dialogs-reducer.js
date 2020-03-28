let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Dimych',
            avatarSrc: 'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Man-Person-People-Avatar-User-Happy-512.png'
        },
        {
            id: 2,
            name: 'Andrei',
            avatarSrc: 'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Person-Adult-Man-Laugh-Avatar-Happy-Smile-512.png'
        },
        {
            id: 3,
            name: 'David',
            avatarSrc: 'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Boy-Man-Happy-Sunglasses-Avatar-Person-Kid-512.png'
        },
        {
            id: 4,
            name: 'Sasha',
            avatarSrc: 'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Woman-Lady-Girl-Female-Avatar-People-Happy-512.png'
        },
        {
            id: 5,
            name: 'Victor',
            avatarSrc: 'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Happy-Emotion-Expression-Feeling-Smile-Happiness-Boy-512.png'
        },
        {
            id: 6,
            name: 'Nikola',
            avatarSrc: 'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Education-Graduate-Student-Study-School-University-College-512.png'
        }
    ],
    messagesData: [
        {id: 1, massage: 'Hy'},
        {id: 2, massage: 'How is your ID'},
        {id: 3, massage: 'YOyo'}
    ],
};

export const sendMassageCreator = (newMassageBody) => {
    return {type: 'SEND_MASSAGE', newMassageBody}
};

const dialogsReducer = (state = initialState, action) => {
    if (action.type === 'SEND_MASSAGE') {
        let stateCopy_2 = {...state};
        stateCopy_2.messagesData.push({id: 4, massage: action.newMassageBody});
        return stateCopy_2;
    } else {
        return state
    }
};

export default dialogsReducer;  //41 - React