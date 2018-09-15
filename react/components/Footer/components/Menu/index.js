import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import MenuFooterController from '../../../../controllers/MenuFooterController';


@MenuFooterController()
export default class MenuFooter extends Component {

    render() {

        return (
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink exact to='/'
                                 activeClassName={styles.active}
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