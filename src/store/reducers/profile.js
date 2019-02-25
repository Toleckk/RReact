import {calculateExperienceForLvl} from "../../utils/calculateExperienceForLvl";

export const profile = {
    state: {
        money: 0,
        gold: 0,
        lvl: {
            value: 0,
            experience: 0,
            next: 0,
            previous: 0
        },
        avatar: '',
        nextLvl: 0,
        previousLvl: 0,
        nation: {
            id: 0,
            peopleCount: 0
        }
    }, reducers: {
        me(state) {
            const payload = {
                id: 102808314,
                money: 2375765678732,
                gold: 3467,
                lvl: {
                    value: 95,
                    experience: 15868793390
                },
                nation: {
                    id: 939,
                    peopleCount: 35
                }
            };
            const {lvl} = payload;
            return {
                ...state, ...{
                    ...payload,
                    lvl: state.lvl.value === lvl.value
                        ? lvl
                        : {
                            ...lvl,
                            next: calculateExperienceForLvl(lvl.value + 1),
                            previous: calculateExperienceForLvl(lvl.value)
                        }
                }
            };
        }
    }
};