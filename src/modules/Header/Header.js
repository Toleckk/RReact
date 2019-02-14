import React from 'react';
import './style.scss';
import LeftHeader from "./LeftHeader";
import CentralHeader from "./CentralHeader";
import RightHeader from "./RightHeader";

const Header = () =>
    <div id={'header'}>
        <LeftHeader/>
        <CentralHeader/>
        <RightHeader/>
    </div>;

export default Header;