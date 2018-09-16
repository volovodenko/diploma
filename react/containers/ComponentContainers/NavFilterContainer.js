import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getCarModelsFilter, getCarCategoriesFilter
} from '../../store/reducers/car/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            carsLoaded: state.car.carsLoaded,
            carsList: state.car.carsList,

            carModelsFilterIsLoading: state.car.carModelsFilterIsLoading,
            carModelsFilterLoaded: state.car.carModelsFilterLoaded,
            carModelsFilterList: state.car.carModelsFilterList,

            carCategoriesFilterIsLoading: state.car.carCategoriesFilterIsLoading,
            carCategoriesFilterLoaded: state.car.carCategoriesFilterLoaded,
            carCategoriesFilterList: state.car.carCategoriesFilterList,
        };
    };

    @connect(
        mapStateToProps,
        {
            getCarModelsFilter, getCarCategoriesFilter
        }
    )
    class NavFilterContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            carsLoaded: PropTypes.bool.isRequired,
            carsList: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired
            })).isRequired,

            carModelsFilterIsLoading: PropTypes.bool.isRequired,
            carModelsFilterLoaded: PropTypes.bool.isRequired,
            carModelsFilterList: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
                car_id: PropTypes.number.isRequired,
            })).isRequired,

            carCategoriesFilterIsLoading: PropTypes.bool.isRequired,
            carCategoriesFilterLoaded: PropTypes.bool.isRequired,
            carCategoriesFilterList: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                car_model_id: PropTypes.number.isRequired,
                car_category_id: PropTypes.number.isRequired,
                parent_id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
            })).isRequired,

            getCarModelsFilter: PropTypes.func.isRequired,
            getCarCategoriesFilter: PropTypes.func.isRequired,
        };
    }


    return NavFilterContainer;
}