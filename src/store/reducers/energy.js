export const energy = {
    state: {
        energy: 0,
        max: 200,
        drinksAt: 0,
        nextTic: 0,
        nextTicAt: 0
    },
    reducers: {
        updateEnergy(state){
            const payload = {
                energy: 200,
                max: 300,
                drinksAt: new Date().getTime() + 60000,
                nextTic: 10,
                nextTicAt: new Date().getTime() + 60000
            };
            return {...state, ...payload};
        },
        updateDrinksAt(state, payload){
            return {...state, drinksAt: payload};
        }
    }
};