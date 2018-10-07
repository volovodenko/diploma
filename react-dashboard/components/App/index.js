import React, {Component} from 'react';

import './styles.scss';
import Main from '../Content';
import Aside from '../Aside';

export default class App extends Component {
    constructor(props) {
        super(props);

        const cookieArray = document.cookie.split(';');
        const tokenCookie = cookieArray.find(item => item.trim().includes('token'));
        const token = tokenCookie.slice(tokenCookie.indexOf('=') + 1, tokenCookie.length);

        localStorage.setItem('tokenAdmin', token);
        document.cookie='token=';
    }


    render() {
        return (
            <main>
                <Aside/>
                <Main/>
            </main>
        );
    }

}