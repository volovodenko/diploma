import React, {Component} from 'react';


import styles from './styles.scss';
import Search from './components/Search';
import CheckoutDeliveryDropDownController
    from '../../../../controllers/ComponentCotrollers/CheckoutDeliveryDropDownController';


@CheckoutDeliveryDropDownController()
export default class DropDown extends Component {

    render() {

        return (
            <div
                className={styles.dropDown}
                ref={this.props.dropDownRef}

            >
                {
                    this.props.searchVisible
                        ? <Search
                            onSearch={this.props.onSearch}
                            inputSearchRef={this.props.inputSearchRef}
                            onKeyDown={this.props.onKeyDown}
                        />
                        : null
                }
                <ul>
                    {
                        this.props.itemsList.map(item => (
                            <li
                                key={item.id}
                                onClick={this.props.setItem(item.title, item.id)}
                            >
                                {item.title}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

}