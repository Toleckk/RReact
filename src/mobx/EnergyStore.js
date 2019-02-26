import {action, observable} from "mobx";

class EnergyStore {
    @observable energy = 0;
    @observable max = 200;
    @observable drinksAt = 0;
    @observable nextTic = 0;
    @observable nextTicAt = 0;

    //TODO: async axios request
    @action updateEnergy = () => {
        this.energy = 200;
        this.max = 300;
        this.drinksAt = new Date().getTime() + 60000;
        this.nextTic = 10;
        this.nextTicAt = new Date().getTime() + 60000;
    };

    @action updateDrinksAt(seconds){
        this.drinksAt = seconds;
    }
}

export default new EnergyStore();