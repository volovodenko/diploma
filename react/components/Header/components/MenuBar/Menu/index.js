import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import MenuHeaderController from '../../../../../controllers/ComponentCotrollers/MenuHeaderController';


@MenuHeaderController()
export default class MenuHeader extends Component {

    render() {

        return (
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link to='/'
                                 className={
                                     classNames(
                                         fontAwesome.fa,
                                         fontAwesome['fa-home'],
                                     )
                                 }
                        />
                    </li>
                    {
                        this.props.menuList.map(item => (
                            <li key={item.id}>
                                <Link
                                    to={`/${item.url}`}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        )
    }
}