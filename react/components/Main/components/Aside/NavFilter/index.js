import React, {Component} from 'react';


import styles from './styles.scss';
import NavFilterController from '../../../../../controllers/NavFilterController';
import CarSelect from './components/CarSelect';
import CarModelSelect from './components/CarModelSelect';
import CarCategorySelect from './components/CarCategorySelect';
import CarSubCategorySelect from './components/CarSubCategorySelect';
import Button from './components/Button';


@NavFilterController()
export default class NavFilter extends Component {

    render() {
        return (
            <ul className={styles.filter} ref={this.props.filter}>

                <h3>Навигация</h3>

                <CarSelect {...this.props}/>
                <CarModelSelect {...this.props}/>
                <CarCategorySelect {...this.props}/>
                <CarSubCategorySelect {...this.props}/>
                <Button {...this.props}/>

            </ul>

        );
    }
}