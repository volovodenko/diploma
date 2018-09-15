import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getCars
} from '../store/reducers/car/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            carsList: state.car.carsList,
            carsLoaded: state.car.carsLoaded,
        };
    };

    @connect(
        mapStateToProps,
        {
            getCars
        }
    )
    class HomePageContainer extends Component {

        render() {
            console.log('HomePageContainer');
            return <Controller {...this.props}/>
        }


        static propTypes = {
            carsLoaded: PropTypes.bool.isRequired,
            carsList: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired
            })).isRequired,

            getCars: PropTypes.func.isRequired,
        };
    }


    return HomePageContainer;
}