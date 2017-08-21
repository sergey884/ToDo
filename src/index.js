'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createAppStore from './store';
import App from './containers/App';

const store = createAppStore();

render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);