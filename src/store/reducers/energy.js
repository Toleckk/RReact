import {ENERGY_UPDATED, DRINKS_IN_UPDATED, NEXT_TIC_IN_UPDATED} from "../actions/energy";

const initialState = {
    energy: 0,
    max: 200,
    drinksIn: 0,
    nextTic: 0,
    nextTicIn: 0
};

export default function (state = initialState, action) {
    switch(action.type){
        case ENERGY_UPDATED:
            return {...state, ...action.payload};
        case DRINKS_IN_UPDATED:
            return state.drinksIn === 0 ? state : {...state, drinksIn: state.drinksIn - 1};
        case NEXT_TIC_IN_UPDATED:
            return state.nextTic === 0 ? state : {...state, nextTicIn: state.nextTicIn - 1};
        default:
            return state;
    }
}