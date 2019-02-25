import './style.scss';
import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import TimeLeft from "../../../TimeLeft";

const EnergyDetails = ({energy, max, nextTic, nextTicAt}) => {
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

const mapStateToProps = ({energy: {energy, nextTic, nextTicAt, max}}) => ({energy, nextTic, nextTicAt, max});

export default connect(mapStateToProps)(EnergyDetails);
