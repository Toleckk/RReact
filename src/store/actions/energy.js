export const ENERGY_UPDATED = 'energy_update';
export const DRINKS_IN_UPDATED = 'drinks_in_updated';
export const NEXT_TIC_IN_UPDATED = 'next_tic_in_updated';

// TODO: request
export const updateEnergy = () =>
    dispatch => dispatch({
        type: ENERGY_UPDATED,
        payload: {energy: 200, max: 300, drinksIn: 5, nextTic: 10, nextTicIn: 100}
    });

export const updateDrinksIn = dispatch => dispatch({type: DRINKS_IN_UPDATED});

export const updateNextTicIn = dispatch => dispatch({type: NEXT_TIC_IN_UPDATED});

