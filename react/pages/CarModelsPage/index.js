import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import styles from './styles.scss';
import Nav from '../CatalogPage/helpers/Nav';
import CarModelsPageController from '../../controllers/CarModelsPageController';


@CarModelsPageController()
export default class CarModelsPage extends Component {

    render() {

        return (
           <div className={styles.catalog}>
                <Nav {...this.props} />
                <ul className={styles.modelsList}>
                    {
                        this.props.carModelsList.map(item => (
                            <li key={item.id}>
                                <Link to={`/catalog/${this.props.car}/${item.slug}`}>
                                    <img src={`/storage/img/icons/car-models/${this.props.car}/${item.slug}.png`}/>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )

    }
}