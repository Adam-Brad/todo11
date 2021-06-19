import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import './index.css';
import reportWebVitals from './reportWebVitals';
import {listReducer} from "./reducers/listReducer";
import {AppContainer} from "./App";

// @ts-ignore
const store = createStore(listReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
