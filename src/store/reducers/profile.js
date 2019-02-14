import {ME} from "../actions/profile";

const initialState = {
    money: 0,
    gold: 0,
    lvl: 0,
    avatar: ''
};

export default function (state = initialState, action) {
    switch(action.type){
        case ME:
            return {...state, ...action.payload};
        default:
            return state;
    }
}