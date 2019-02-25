import './style.scss';
import React from 'react';
import LeftHeader from "./LeftHeader";
import CentralHeader from "./CentralHeader";
import RightHeader from "./RightHeader";

const Header = () =>
    <div id={'header'}>
        <LeftHeader/>
        <CentralHeader/>
        <RightHeader/>
    </div>;

export default React.memo(Header);