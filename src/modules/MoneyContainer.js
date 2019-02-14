import React from 'react';
import Counts from "./Counts";
import TimeLeft from "./TimeLeft";
import {connect} from 'react-redux';

const MoneyContainer = props =>
    <div id={'money-container'}>
        <Counts count={props.money} what={'R'}/>
        <div>
            <Counts count={props.gold} what={'G'}/>
            {props.drinksIn > 0 && <TimeLeft seconds={props.drinksIn}/>}
        </div>
    </div>;

const mapStateToProps = store => ({
    money: store.profile.money,
    gold: store.profile.gold,
    drinksIn: store.energy.drinksIn
});

export default connect(mapStateToProps)(React.memo(MoneyContainer));