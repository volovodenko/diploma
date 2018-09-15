import React, {Component} from 'react';


import styles from './styles.scss';
import Menu from './components/Menu/index';
import Info from './components/Info/index';


export default class Footer extends Component {

    render() {
        return (
            <footer className={styles.footer}>
                <div className={styles.wrapper}>
                    <Menu/>
                    <Info/>
                </div>
            </footer>
        );
    }
}