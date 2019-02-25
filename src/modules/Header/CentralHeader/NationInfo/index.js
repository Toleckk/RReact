import './style.scss';
import React from 'react';
import {connect} from 'react-redux';

const NationInfo = ({id, count}) =>
    <div id={'nation-info'}>
        <img id={'nation-image'} src={`/static/nations/${id}.png`} alt={'nation'}/>
        <div>{count}</div>
        <img id={'people-image'} src={'/static/header/people_16.png'} alt={'people'}/>
    </div>;

const mapStateToProps = ({profile: {nation: {id, peopleCount}}}) => ({id, count: peopleCount});

export default connect(mapStateToProps)(NationInfo);