import {action, computed, observable} from "mobx";

class Level {
    @observable value;
    @observable experience;

    constructor() {
        this.value = 0;
        this.experience = 0;
    }

    @computed get nextLvlExperience(){
        return Level.calculateExperienceForLvl(this.value + 1);
    }

    @computed get previousLvlExperience(){
        return Level.calculateExperienceForLvl(this.value);
    }

    static calculateExperienceForLvl (lvl) {
        let result = 500;
        for (let i = 1; i < lvl; ++i)
            result += Math.round(0.2 * result);
        return result;
    };
}

class ProfileStore {
    @observable id = 0;
    @observable money = 0;
    @observable gold = 0;
    @observable lvl = new Level();
    @observable nation = {
        id: 0,
        peopleCount: 0
    };

    @action me = () => {
        this.id = 102808314;
        this.money = 2375765678732;
        this.gold = 3467;
        this.lvl.value = 95;
        this.lvl.experience = 15868793390;
        this.nation = {
            id: 939,
            peopleCount: 35
        }
    };
}

export default new ProfileStore();