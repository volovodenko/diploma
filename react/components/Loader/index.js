import React, {Component} from 'react';


import styles from './styles.scss';
import LoaderController from '../../controllers/ComponentCotrollers/LoaderController';


@LoaderController()
export default class Loader extends Component {

    render() {
        return  (
            <div className={styles.loader}>
                <span className={styles.expand}/>
            </div>
        )
    }

}