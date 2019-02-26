import './style.scss';
import React from "react";
import ReactTooltip from 'react-tooltip';
import Counts from '../../../Counts';
import {observer} from "mobx-react-lite";

import ProfileStore from "../../../../mobx/ProfileStore";

const Avatar = () => {
    const {id, lvl: {value: lvl, experience, nextLvlExperience: next, previousLvlExperience: previous}} = ProfileStore;

    const style = {
        width: (experience - previous) / (next - previous) * 100 + '%'
    };

    return <div id={'avatar'}>
        <img src={`/static/avatars/${id}.png`} alt={'avatar'}/>
        <div data-tip id={'experience-container'}>
            <div id={'experience'} style={style}/>
            <span id={'lvl'}>{lvl}</span>
        </div>
        <ReactTooltip effect={'solid'} place={'right'} className={'tooltip'}>
            <span>Experience: {<Counts count={experience}/>}</span>
        </ReactTooltip>
    </div>
};

export default observer(Avatar);