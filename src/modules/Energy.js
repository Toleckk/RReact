import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {updateEnergy} from "../store/actions/energy";

class Energy extends PureComponent {
    componentWillMount() {
        this.props.updateEnergy();
    }

    mouseEnter = () => this.props.handler(true);

    mouseLeave = () => this.props.handler(false);

    render() {
        const {energy, max} = this.props;
        const style = {
            height: energy / max * 100 + '%',
            backgroundColor:
                `rgba(${Math.ceil(255 - 2.55 * (energy / max * 100))}, 
                ${Math.ceil(2.55 * (energy / max * 100))}, 0, 0.901961)`
        };
        return (
            <div onMouseEnter={this.mouseEnter}
                 onMouseLeave={this.mouseLeave} id={'energy'}>
                <div style={style}/>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    energy: store.energy.energy,
    max: store.energy.max
});

const mapDispatchToProps = dispatch => ({
    updateEnergy: () => dispatch(updateEnergy())
});

export default connect(mapStateToProps, mapDispatchToProps)(Energy);