import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getCarModelsCatalog, onClearFetchErrors
} from '../store/reducers/car/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            carModelsCatalogList: state.car.carModelsCatalogList,
            carModelsCatalogLoaded: state.car.carModelsCatalogLoaded,
            carModelsCatalogFetchFail: state.car.carModelsCatalogFetchFail,
        };
    };

    @connect(
        mapStateToProps,
        {
            getCarModelsCatalog, onClearFetchErrors
        }
    )
    class CarModelsPageContainer extends Component {


        render() {
            console.log('CarModelsPageContainer');

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

            getCarModelsCatalog: PropTypes.func.isRequired,
            onClearFetchErrors: PropTypes.func.isRequired,
        };
    }


    return CarModelsPageContainer;
}