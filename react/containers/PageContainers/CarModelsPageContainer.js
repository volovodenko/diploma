import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getCarModelsCatalog, onClearFetchErrors, getCars
} from '../../store/reducers/car/actions';
import {
    onSaveHistorySlug,
} from '../../store/reducers/nav/actions';



export default () => Controller => {

    const mapStateToProps = state => {
        return {
            carModelsCatalogList: state.car.carModelsCatalogList,
            carModelsCatalogLoaded: state.car.carModelsCatalogLoaded,
            carModelsCatalogFetchFail: state.car.carModelsCatalogFetchFail,
            carsLoaded: state.car.carsLoaded,
            carsList: state.car.carsList
        };
    };

    @connect(
        mapStateToProps,
        {
            getCarModelsCatalog, onClearFetchErrors, getCars,
            onSaveHistorySlug
        }
    )
    class CarModelsPageContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            carModelsCatalogList: PropTypes.arrayOf(PropTypes.shape({
                car: PropTypes.string.isRequired,
                models: PropTypes.arrayOf(PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    title: PropTypes.string.isRequired,
                    slug: PropTypes.string.isRequired,
                    car_id: PropTypes.number.isRequired,
                })).isRequired,
            })).isRequired,
            carModelsCatalogLoaded: PropTypes.bool.isRequired,
            carModelsCatalogFetchFail: PropTypes.bool.isRequired,
            carsLoaded: PropTypes.bool.isRequired,
            carsList: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired
            })).isRequired,

            getCarModelsCatalog: PropTypes.func.isRequired,
            onClearFetchErrors: PropTypes.func.isRequired,
            getCars: PropTypes.func.isRequired,
            onSaveHistorySlug: PropTypes.func.isRequired,
        };
    }


    return CarModelsPageContainer;
}