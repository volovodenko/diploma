import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';


import styles from './styles.scss';
import routes from '../../../../routes';


export default class Content extends Component {

    render() {
        return (
            <section className={styles.content}>
                <Switch>
                    {
                        routes.map(route => (
                            <Route
                                key={route.name}
                                exact={route.isExact}
                                path={route.path}
                                render={route.component}
                            />
                        ))
                    }
                </Switch>
            </section>
        );
    }
}