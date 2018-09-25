import React, {Component} from 'react';


import styles from './styles.scss';
import Search from './components/Search/index';
import DropDownController
    from '../../../../controllers/ComponentCotrollers/Checkout/DropDownController';


@DropDownController()
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
                                onClick={this.props.setItem(item)}
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