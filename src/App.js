import React, {useEffect} from 'react';
import './App.css';
import Header from "./modules/Header";
import {connect} from "react-redux";
import Menu from "./modules/Menu";

const App = ({me}) => {
    useEffect(() => me(), []);

    return <div style={{height: 100 + '%'}}>
        <Header/>
        <Menu/>
    </div>
};

const mapDispatchToProps = ({profile: {me}}) => ({me});

const mapStateToProps = ({profile}) => ({profile});

export default connect(mapStateToProps, mapDispatchToProps)(App);