import './style.scss';
import Energy from "./Energy";
import EnergyDetails from "./EnergyDetails";
import MoneyContainer from "./MoneyContainer";
import React, {useState} from "react";
import {connect} from "react-redux";
import Avatar from "./Avatar";

const LeftHeader = ({energy, max, drinksAt}) => {
    const [energyHovered, setHovered] = useState(false);

    return <div id={'left-header'}>
        <Avatar/>
        <Energy hoverHandler={setHovered}/>
        {energyHovered ? <EnergyDetails/> : <MoneyContainer/>}
        {energy < max && drinksAt <= new Date().getTime() && <button id={'energy-drink'}/>}
    </div>;
};

const mapStateToProps = ({energy: {drinksAt, energy, max}}) => ({drinksAt, energy, max});

export default connect(mapStateToProps)(LeftHeader);