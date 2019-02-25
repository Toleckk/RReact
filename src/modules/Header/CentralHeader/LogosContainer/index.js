import './style.scss';
import React from 'react';

const LogosContainer = () => <div id={'logos-container'}>
    <div id={'logo'}>
        Rival Regions
    </div>
    <img src={'/static/header/vk.png'} alt={'vk'}/>
    <img src={'/static/header/wiki.png'} alt={'wiki'}/>
</div>;

export default React.memo(LogosContainer);