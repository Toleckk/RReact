export const ME = 'me';

export const me = dispatch => dispatch({
        type: ME,
        payload: {
            money: '2375765678732',
            gold: '3467',
            lvl: 0,
            avatar: '/avatar.png'
        }
    }
);