import React, {Component} from 'react';


import styles from './styles.scss';
import NavBar from '../../components/NavBar';
import PageLoader from '../../components/Loaders/PageLoader';
import CarModelsPageController from '../../controllers/PageControllers/CarModelsPageController';
import FakeList from '../../components/Pages/Home/FakeList';
import CarModelsList from '../../components/Pages/CarModelsPage/CarModelsList';


@CarModelsPageController()
export default class CarModelsPage extends Component {

    render() {

        return (
           <div
               className={styles.catalog}
               ref={this.props.catalogRef}
           >
                <NavBar
                    car={this.props.car}
                />

                <ul className={styles.modelsList}>
                    <CarModelsList
                        carModelsList={this.props.carModelsList}
                        car={this.props.car}
                    />

                    <FakeList fakeList={this.props.fakeList}/>
                </ul>

               <PageLoader styles={styles}/>

            </div>
        )

    }
}