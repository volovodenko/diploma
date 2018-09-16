import React, {Component} from 'react';


import styles from './styles.scss';
import ProductListItemController from '../../../../controllers/ComponentCotrollers/ProductListItemController'
import SelectQuantityDropDown from '../../../SelectQuantityDropDown';
import Image from './components/Image';
import Content from './components/Content';


@ProductListItemController()
export default class ProductListItem extends Component {

    render() {
        return (
            <li className={styles.productItem}>
                <Image item={this.props.item}/>
                <Content {...this.props}/>

                {this.props.dropDownVisible ? <SelectQuantityDropDown {...this.props} styles={styles}/> : null}

            </li>
        )

    }
}