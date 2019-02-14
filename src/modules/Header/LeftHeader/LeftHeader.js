import Energy from "./Energy";
import EnergyDetails from "./EnergyDetails";
import MoneyContainer from "./MoneyContainer";
import React, {Component} from "react";
import {updateDrinksIn, updateNextTicIn} from "../../../store/actions/energy";
import connect from "react-redux/es/connect/connect";
import './style.scss';

class LeftHeader extends Component {
    state = {
        energyHovered: false
    };

    componentDidMount() {
        this.drinksInInterval = setInterval(() => this.props.drinksIn && this.props.updateDrinksIn(), 1000);
        this.nextTicInInterval = setInterval(() => this.props.nextTicIn && this.props.updateNextTicIn(), 1000);
    }

    shouldComponentUpdate(props, state) {
        return props.avatar !== this.props.avatar
            || props.energy !== this.props.energy
            || props.max !== this.props.max
            || state.energyHovered !== this.state.energyHovered;
    }

    componentWillUnmount() {
        clearInterval(this.drinksInInterval);
        clearInterval(this.nextTicInInterval);
    }

    energyHovered = is => this.setState({energyHovered: is});

    render() {
        const {avatar, energy, max} = this.props;
        return <div id={'left-header'}>
            <img src={avatar} alt={'avatar'} style={{cursor: 'pointer', width: 50 + 'px', height: 50 + 'px'}}/>
            <Energy handler={this.energyHovered}/>
            {this.state.energyHovered ? <EnergyDetails/> : <MoneyContainer/>}
            {energy < max && <button id={'energy-drink'}/>}
        </div>;
    }
}

const mapStateToProps = store => ({
    avatar: store.profile.avatar,
    drinksIn: store.energy.drinksIn,
    nextTicIn: store.energy.nextTicIn,
    energy: store.energy.energy,
    max: store.energy.max
});

const mapDispatchToProps = dispatch => ({
    updateDrinksIn: () => dispatch(updateDrinksIn),
    updateNextTicIn: () => dispatch(updateNextTicIn)
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftHeader);