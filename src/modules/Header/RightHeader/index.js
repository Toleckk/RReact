import './style.scss';
import React from 'react';

const RightHeader = () => <div id={'right-header'}>
    <img src={'/static/header/money.png'} alt={'money'}/>
    <img src={'/static/header/settings.png'} alt={'settings'}/>
    <img src={'/static/header/friends.png'} alt={'friends'}/>
    <img src={'/static/header/chat.png'} alt={'chat'}/>
</div>;

export default React.memo(RightHeader);