import './style.scss';
import React from 'react';
import {observer} from "mobx-react-lite";
import ProfileStore from "../../../../mobx/ProfileStore";

const NationInfo = () =>
    <div id={'nation-info'}>
        <img id={'nation-image'} src={`/static/nations/${ProfileStore.nation.id}.png`} alt={'nation'}/>
        <div>{ProfileStore.nation.peopleCount}</div>
        <img id={'people-image'} src={'/static/header/people_16.png'} alt={'people'}/>
    </div>;

export default observer(NationInfo);