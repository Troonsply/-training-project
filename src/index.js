import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reducer from './reducer';
import {Provider} from "react-redux";

const redux = require("redux");
const store = redux.createStore(Reducer);

ReactDOM.render((
   <Provider store={store}>
     <App/>
   </Provider>
 ), document.getElementById('root')
);



