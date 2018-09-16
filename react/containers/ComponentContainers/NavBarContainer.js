import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            carsList: state.car.carsList,
            carModelsCatalogList: state.car.carModelsCatalogList,
            carCategoriesCatalogList: state.car.carCategoriesCatalogList
        };
    };

    @connect(
        mapStateToProps,
        null
    )
    class NavBarContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            carsList: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired
            })).isRequired,
            carModelsCatalogList: PropTypes.arrayOf(PropTypes.shape({
                car: PropTypes.string.isRequired,
                models: PropTypes.arrayOf(PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    title: PropTypes.string.isRequired,
                    slug: PropTypes.string.isRequired,
                    car_id: PropTypes.number.isRequired,
                })).isRequired,
            })).isRequired,
            carCategoriesCatalogList: PropTypes.array.isRequired,
        };
    }


    return NavBarContainer;
}