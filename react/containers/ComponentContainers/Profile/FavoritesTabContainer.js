import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getFavorites, deleteFromFavorites
} from '../../../store/reducers/user/actions';



export default () => Controller => {

    const mapStateToProps = (state) => {
        return {
            favoritesList: state.user.favoritesList,
            favoritesListLoaded: state.user.favoritesListLoaded,
        };
    };

    @connect(
        mapStateToProps,
        {
            getFavorites, deleteFromFavorites,
        }
    )
    class FavoritesTabContainer extends Component {


        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            favoritesList: PropTypes.array.isRequired,
            favoritesListLoaded: PropTypes.bool.isRequired,

            getFavorites: PropTypes.func.isRequired,
            deleteFromFavorites: PropTypes.func.isRequired,
        };
    }


    return FavoritesTabContainer;
}