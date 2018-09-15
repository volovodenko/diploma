import React, {Component} from 'react';


import styles from './styles.scss';
import Menu from './Menu/index';
import Login from './Login/index';


export default class MenuBar extends Component {

    render(){
        return (
            <section className={styles.wrapper}>
                <div className={styles.menu}>
                    <Menu />
                    <Login/>
                </div>
            </section>
        )
    }

}