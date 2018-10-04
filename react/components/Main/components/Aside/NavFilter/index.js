import React, {Component} from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import NavFilterController from '../../../../../controllers/ComponentCotrollers/Main/NavFilterController';
import CarSelect from './components/CarSelect';
import CarModelSelect from './components/CarModelSelect';
import CarCategorySelect from './components/CarCategorySelect';
import CarSubCategorySelect from './components/CarSubCategorySelect';
import Button from './components/Button';


@NavFilterController()
export default class NavFilter extends Component {

    render() {
        return (
            <div ref={this.props.navFilterPopupRef}>
                <ul
                    className={
                        classNames(
                            styles.filter,
                            this.props.styles ? this.props.styles.navFilter : styles.local
                        )
                    }
                    ref={this.props.filter}
                >

                    <h3>Навигация</h3>

                    <CarSelect {...this.props}/>
                    <CarModelSelect {...this.props}/>
                    <CarCategorySelect {...this.props}/>
                    <CarSubCategorySelect {...this.props}/>
                    <Button {...this.props}/>

                </ul>
            </div>

        );
    }
}