import React, {Component} from 'react';


import styles from './styles.scss';
import CarsList from '../../components/Pages/Home/CarsList';
import FakeList from '../../components/Pages/Home/FakeList';
import PageLoader from '../../components/Loaders/PageLoader';
import HomePageController from '../../controllers/PageControllers/HomePageController';


@HomePageController()
export default class HomePage extends Component {

    render() {

        return (
            <div className={styles.content}
                 ref={this.props.contentRef}
            >
                <h1>Каталог автозапчастей</h1>

                <ul className={styles.cars}>
                    <CarsList carsList={this.props.carsList}/>
                    <FakeList fakeList={this.props.fakeList}/>
                </ul>

                <PageLoader styles={styles}/>
            </div>
        );
    }
}