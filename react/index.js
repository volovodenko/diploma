import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';


import Index from './components/App';
import configStore from './store/configStore';

const store = configStore();


ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Index/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('wrapper')
);