import './style.scss';
import React from "react";
import {connect} from "react-redux";
import ReactTooltip from 'react-tooltip';
import Counts from '../../../Counts';

const Avatar = ({id, lvl, experience, next, previous}) => {
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

const mapStateToProps = ({profile: {id, lvl}}) => ({
    id: id,
    lvl: lvl.value,
    experience: lvl.experience,
    next: lvl.next,
    previous: lvl.previous
});

export default connect(mapStateToProps)(Avatar);