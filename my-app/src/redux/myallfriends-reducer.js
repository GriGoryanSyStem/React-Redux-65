let initialState = {
    countFriends: [
        {
            id: 1,
            name: 'Mike',
            crImageSrc: 'https://getdrawings.com/free-icon/icone-people-68.png'
        },
        {
            id: 2,
            name: 'Karl',
            crImageSrc: 'https://kookoomall.kg/Storage/Plat/ImageAd/201712242125401367650.png'
        },
        {
            id: 3,
            name: 'George',
            crImageSrc: 'https://static.tildacdn.com/tild6234-6438-4735-b737-363031656632/man-1.png'
        }
    ]
};

const friendsReducer = (state = initialState, action) => {
    if (action.type) {
        return state;
    }
};

export default friendsReducer;  //41 - React