import React, {Component} from 'react';
import './App.css';
import Header from "./modules/header/Header";
import {connect} from "react-redux";
import {me} from './store/actions/profile'

class App extends Component {
    componentWillMount() {
        this.props.me();
    }

    render() {
        return (
            <div style={{height: 100 + '%'}}>
                <Header/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    me: () => dispatch(me)
});

const mapStateToProps = store => ({
    profile: store.profile
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
