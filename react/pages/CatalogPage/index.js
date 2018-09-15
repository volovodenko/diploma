import React, {Component} from 'react';


import styles from  './styles.scss';
import CatalogPageController from '../../controllers/CatalogPageController';


@CatalogPageController()
export default class CatalogPage extends Component {

    render() {

        return (
            <div className={styles.catalog}>
                {this.props.children}
            </div>
        );
    }
}