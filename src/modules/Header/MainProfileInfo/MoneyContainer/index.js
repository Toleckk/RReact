import './style.scss';
import React from 'react';
import Counts from "../../../Counts";
import TimeLeft from "../../../TimeLeft";
import {observer} from "mobx-react-lite";

import ProfileStore from "../../../../mobx/ProfileStore";
import EnergyStore from "../../../../mobx/EnergyStore";

const MoneyContainer = () => {
    const {money, gold} = ProfileStore;
    const {drinksAt, updateDrinksAt} = EnergyStore;

    const style = {display: 'flex'};

    return <div id={'money-container'}>
        <Counts count={money} currency={'R'}/>
        <div style={style}>
            <Counts count={gold} currency={'G'}/>
            {drinksAt > new Date().getTime() && <TimeLeft finishAt={drinksAt} onFinish={updateDrinksAt}/>}
        </div>
    </div>
};

export default observer(MoneyContainer);