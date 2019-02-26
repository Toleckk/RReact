import './style.scss';
import React, {useEffect, useMemo} from 'react';
import {observer} from 'mobx-react-lite';

import EnergyStore from "../../../../mobx/EnergyStore";

const Energy = ({hoverHandler}) => {
    const {updateEnergy, energy, max} = EnergyStore;

    useEffect(() => {updateEnergy();}, []);

    const mouseEnter = () => hoverHandler(true);

    const mouseLeave = () => hoverHandler(false);

    const style = useMemo(() => ({
        height: energy / max * 100 + '%',
        backgroundColor:
            `rgba(${Math.ceil(255 - 2.55 * (energy / max * 100))}, 
                ${Math.ceil(2.55 * (energy / max * 100))}, 0, 0.901961)`
    }), [energy, max]);

    return (
        <div onMouseEnter={mouseEnter}
             onMouseLeave={mouseLeave} id={'energy'}>
            <div style={style}/>
        </div>
    );
};

export default observer(Energy);