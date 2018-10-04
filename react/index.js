import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';


import ErrorBoundary from './components/ErrorBoundary';
import App from './components/App';
import configStore from './store/configStore';

const store = configStore();


ReactDom.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('wrapper')
);