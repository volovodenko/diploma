import React, {Component} from 'react';


import styles from './styles.scss';
import CarModelsList from './componets/CarModelsList';
import HomePageController from '../../controllers/HomePageController';


@HomePageController()
export default class HomePage extends Component {

    render() {
        return (
            <div className={styles.home}>
                <h1>Каталог автозапчастей</h1>
                <ul className={styles.parts}>
                    <CarModelsList carsList={this.props.carsList}/>
                </ul>
            </div>
        );
    }
}