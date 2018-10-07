import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';


import styles from './styles.scss';
import Default from '../../pages/Default';
import Orders from '../../pages/Orders';
import Comments from '../../pages/Comments';


export default class Content extends Component {

    render() {

        return (
            <section className={styles.content}>
                <Switch>
                    <Route exact path='/dashboard' component={Default}/>
                    <Route exact path='/dashboard/orders' component={Orders}/>
                    <Route exact path='/dashboard/comments' component={Comments}/>
                </Switch>
            </section>
        );
    }

}