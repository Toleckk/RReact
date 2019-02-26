import './style.scss';
import React from 'react';
import MainProfileInfo from "./MainProfileInfo";
import CentralHeader from "./CentralHeader";
import RightHeader from "./RightHeader";

const Header = () => {
    return <div id={'header'}>
        <MainProfileInfo/>
        <CentralHeader/>
        <RightHeader/>
    </div>;
};

export default Header;