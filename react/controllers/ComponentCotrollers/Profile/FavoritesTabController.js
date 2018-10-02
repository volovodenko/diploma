import React, {Component} from 'react';


import FavoritesTabContainer from '../../../containers/ComponentContainers/Profile/FavoritesTabContainer';


export default () => View => {

    @FavoritesTabContainer()
    class FavoritesTabController extends Component {

        constructor(props) {
            super(props);

            this.props.getFavorites();
        }


        render() {

            return <View
                favoritesList={this.props.favoritesList}
                deleteFromFavorites={::this.deleteFromFavorites}
            />
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        deleteFromFavorites = (productId) => () => {
            this.props.deleteFromFavorites(productId);
        };

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return FavoritesTabController;

}