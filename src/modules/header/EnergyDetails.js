import React from 'react';
import {connect} from 'react-redux';
import TimeLeft from "../TimeLeft";

const EnergyDetails = props => {
    const {energy, max, nextTic, nextTicIn} = props;
    const green = Math.ceil(2.55 * (energy / max * 100));
    const style = {color: `rgba(${Math.ceil(255 - green)}, ${green}, 0, 0.901961)`};
    return (
        <div id={'energy-details'} style={style}>
            Энергия: {energy}<br/>
            {energy < max && <div>+{nextTic} через <TimeLeft seconds={nextTicIn} style={style}/></div>}
        </div>);
};

const mapStateToProps = store => ({
    energy: store.energy.energy,
    nextTic: store.energy.nextTic,
    nextTicIn: store.energy.nextTicIn,
    max: store.energy.max
});

export default connect(mapStateToProps)(React.memo(EnergyDetails));
