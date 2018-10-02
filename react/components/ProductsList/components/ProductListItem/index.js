import React, {Component} from 'react';


import styles from './styles.scss';
import ProductListItemController from '../../../../controllers/ComponentCotrollers/Main/ProductListItemController'
import SelectQuantityDropDown from '../../../SelectQuantityDropDown';
import Image from './components/Image';
import Content from './components/Content';
import DeleteFromFavorites from './components/DeleteFromFavorites';


@ProductListItemController()
export default class ProductListItem extends Component {

    render() {
        return (
            <li className={styles.productItem}>
                <Image item={this.props.item}/>
                <Content {...this.props}/>

                {this.props.dropDownVisible && <SelectQuantityDropDown {...this.props} styles={styles}/>}

                {
                    this.props.favorites &&
                    <DeleteFromFavorites deleteFromFavorites={this.props.deleteFromFavorites(this.props.item.id)}/>
                }
            </li>
        )

    }
}