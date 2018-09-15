import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getCars, getCarModelsFilter, getCarModelsCatalog,
    getCarCategoriesFilter, getCarCategoriesCatalog, onClearFetchErrors
} from './store/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            carsList: state.car.carsList,
            carsLoaded: state.car.carsLoaded,

            carModelsFilterList: state.car.carModelsFilterList,
            carModelsFilterIsLoading: state.car.carModelsFilterIsLoading,
            carModelsFilterLoaded: state.car.carModelsFilterLoaded,

            carModelsCatalogList: state.car.carModelsCatalogList,
            carModelsCatalogIsLoading: state.car.carModelsCatalogIsLoading,
            carModelsCatalogLoaded: state.car.carModelsCatalogLoaded,
            carModelsCatalogFetchFail: state.car.carModelsCatalogFetchFail,

            carCategoriesFilterList: state.car.carCategoriesFilterList,
            carCategoriesFilterIsLoading: state.car.carCategoriesFilterIsLoading,
            carCategoriesFilterLoaded: state.car.carCategoriesFilterLoaded,

            carCategoriesCatalogList: state.car.carCategoriesCatalogList,
            carCategoriesCatalogIsLoading: state.car.carCategoriesCatalogIsLoading,
            carCategoriesCatalogLoaded: state.car.carCategoriesCatalogLoaded,
            carCategoriesCatalogFetchFail: state.car.carCategoriesCatalogFetchFail,
        };
    };

    @connect(
        mapStateToProps,
        {
            getCars, getCarModelsFilter, getCarModelsCatalog,
            getCarCategoriesFilter, getCarCategoriesCatalog, onClearFetchErrors
        },
        null,
        {pure: false}
    )
    class CarContainer extends Component {

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

            carModelsFilterLoaded: PropTypes.bool.isRequired,
            carModelsFilterIsLoading: PropTypes.bool.isRequired,
            carModelsFilterList: PropTypes.array,

            carModelsCatalogList: PropTypes.array,
            carModelsCatalogIsLoading: PropTypes.bool.isRequired,
            carModelsCatalogLoaded: PropTypes.bool.isRequired,
            carModelsCatalogFetchFail: PropTypes.bool.isRequired,

            carCategoriesFilterList: PropTypes.array,
            carCategoriesFilterIsLoading: PropTypes.bool.isRequired,
            carCategoriesFilterLoaded: PropTypes.bool.isRequired,

            carCategoriesCatalogList: PropTypes.array,
            carCategoriesCatalogIsLoading: PropTypes.bool.isRequired,
            carCategoriesCatalogLoaded: PropTypes.bool.isRequired,
            carCategoriesCatalogFetchFail: PropTypes.bool.isRequired,


            getCars: PropTypes.func.isRequired,
            getCarModelsFilter: PropTypes.func.isRequired,
            getCarModelsCatalog: PropTypes.func.isRequired,
            getCarCategoriesFilter: PropTypes.func.isRequired,
            getCarCategoriesCatalog: PropTypes.func.isRequired,
        };
    }


    return CarContainer;
}