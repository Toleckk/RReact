import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./store/store";

let element = document.createElement('span');
element.textContent = '1';
element.className = 'counts';
element.style.width = 'auto';
element.style.height = 'auto';
element.style.position = 'absolute';
document.body.appendChild(element);
if (element.clientWidth !== 10)
    document.body.style.letterSpacing = 10 - element.clientWidth + 'px';
document.body.removeChild(element);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();