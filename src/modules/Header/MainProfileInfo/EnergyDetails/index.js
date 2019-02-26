import './style.scss';
import React, {useMemo} from 'react';
import TimeLeft from "../../../TimeLeft";
import {observer} from "mobx-react-lite";

import EnergyStore from "../../../../mobx/EnergyStore";

const EnergyDetails = () => {
    const {energy, nextTic, nextTicAt, max} = EnergyStore;

    const style = useMemo(() => {
        const green = Math.ceil(2.55 * (energy / max * 100));
        return {color: `rgba(${Math.ceil(255 - green)}, ${green}, 0, 0.901961)`};
    }, [energy, max]);

    return <div id={'energy-details'} style={style}>
        Энергия: {energy}<br/>
        {energy < max && <>
            +{nextTic} через <TimeLeft finishAt={nextTicAt} style={style}/>
        </>}
    </div>;
};

export default observer(EnergyDetails);
