import './style.scss';
import Energy from "./Energy";
import EnergyDetails from "./EnergyDetails";
import MoneyContainer from "./MoneyContainer";
import React, {useState} from "react";
import Avatar from "./Avatar";
import {observer} from "mobx-react-lite";

import EnergyStore from './../../../mobx/EnergyStore';

const MainProfileInfo = () => {
    const {energy, max, drinksAt} = EnergyStore;

    const [energyHovered, setHovered] = useState(false);

    return <div id={'left-header'}>
        <Avatar/>
        <Energy hoverHandler={setHovered}/>
        {energyHovered ? <EnergyDetails/> : <MoneyContainer/>}
        {energy < max && drinksAt <= new Date().getTime() && <button id={'energy-drink'}/>}
    </div>;
};

export default observer(MainProfileInfo);