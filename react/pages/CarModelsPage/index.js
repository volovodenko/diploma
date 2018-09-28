import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import styles from './styles.scss';
import NavBar from '../../components/NavBar';
import PageLoader from '../../components/Loaders/PageLoader';
import CarModelsPageController from '../../controllers/PageControllers/CarModelsPageController';


@CarModelsPageController()
export default class CarModelsPage extends Component {

    render() {

        return (
           <div className={styles.catalog}>
                <NavBar
                    car={this.props.car}
                />

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

               <PageLoader styles={styles}/>

            </div>
        )

    }
}