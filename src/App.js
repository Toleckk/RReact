import React, {useEffect} from 'react';
import './App.css';
import Header from "./modules/Header";
import Menu from "./modules/Menu";

import profileStore from './mobx/ProfileStore';

const App = () => {
    useEffect(() => profileStore.me(), []);

    return <div style={{height: 100 + '%'}}>
        <Header/>
        <Menu/>
    </div>
};

export default App;