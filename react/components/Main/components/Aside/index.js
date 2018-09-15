import React, {Component} from 'react';


import styles from './styles.scss';
import NavFilter from './NavFilter';
import Info from './Info';
import Social from './Social';


export default class Aside extends Component {

    render() {
        return (
            <aside className={styles.aside}>
                <NavFilter/>
                <Info/>
                <Social/>
            </aside>
        );
    }

    /***************************************************************************
     *
     **************************************************************************/


}