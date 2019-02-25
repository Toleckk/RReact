import {init} from "@rematch/core";
import {profile} from "./reducers/profile";
import {energy} from "./reducers/energy";

const store = init({
    models: {
        profile,
        energy
    }
});

export default store;
