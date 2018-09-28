import React, {Component} from 'react';
import classNames from 'classnames';

import styles from './styles.scss';
import PageLoaderController from '../../../controllers/ComponentCotrollers/Loaders/PageLoaderController';


@PageLoaderController()
export default class PageLoader extends Component {

    render() {
        return (
            <div
                className={
                    classNames(
                        styles.loader,
                        this.props.styles ? this.props.styles.loader : null
                    )
                }
            >
                <span className={styles.expand}/>
            </div>
        )
    }

}