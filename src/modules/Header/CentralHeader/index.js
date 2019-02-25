import './style.scss';
import React from "react";
import LogosContainer from "./LogosContainer";
import NationInfo from "./NationInfo";

const CentralHeader = () =>
    <div id={'central-header'}>
        <LogosContainer/>
        <NationInfo/>
    </div>;

export default React.memo(CentralHeader);