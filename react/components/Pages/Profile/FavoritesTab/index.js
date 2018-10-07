import React, {Component} from 'react';


import styles from './styles.scss';
import FavoritesTabController from '../../../../controllers/ComponentControllers/Profile/FavoritesTabController';
import ProductsList from '../../../ProductsList';


@FavoritesTabController()
export default class FavoritesTab extends Component {

    render() {
        return (
            <div className={styles.favorite}>
                {
                    !this.props.favoritesList.length
                        ?
                        <div className={styles.null}>В избранном нет товаров</div>
                        :
                        <ProductsList
                            productList={this.props.favoritesList}
                            activePage={1}
                            favorites={true}
                            itemsCountPerPage={this.props.favoritesList.length}
                            deleteFromFavorites={this.props.deleteFromFavorites}
                        />
                }

            </div>
        );
    }
}