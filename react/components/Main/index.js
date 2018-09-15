import React, {Component} from 'react';


import styles from './styles.scss';
import Aside from './components/Aside';
import Content from './components/Content';


export default class Main extends Component {

    render() {
        return (
            <main className={styles.main}>
                <div className={styles.wrapper}>
                    <Aside/>
                    <Content/>
                </div>
            </main>
        );
    }
}