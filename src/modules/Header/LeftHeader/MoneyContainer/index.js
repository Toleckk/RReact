import './style.scss';
import React from 'react';
import Counts from "../../../Counts";
import TimeLeft from "../../../TimeLeft";
import {connect} from 'react-redux';

const MoneyContainer = ({money, gold, drinksAt, updateDrinksAt}) => {
    const style = {display: 'flex'};
    return <div id={'money-container'}>
        <Counts count={money} currency={'R'}/>
        <div style={style}>
            <Counts count={gold} currency={'G'}/>
            {drinksAt > new Date().getTime() && <TimeLeft finishAt={drinksAt} onFinish={updateDrinksAt}/>}
        </div>
    </div>
};

const mapStateToProps = ({profile: {money, gold}, energy: {drinksAt}}) => ({money, gold, drinksAt});

const mapDispatchToProps = ({energy: {updateDrinksAt}}) => ({
    updateDrinksAt: () => updateDrinksAt(new Date().getTime() + 60000)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoneyContainer);