import React, {Component} from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import NavFilterDropDownController from '../../../../../../../controllers/ComponentCotrollers/NavFilterDropDownController';


@NavFilterDropDownController()
export default class DropDown extends Component {

    render() {

        return (
            <div className={styles.dropDown}>
                <div className={styles.search}>
                    <input
                        type='text'
                        onChange={this.props.onChangeInput}
                        onKeyDown={this.props.keyDown}
                        ref={this.props.inputSearch}
                    />
                    <i
                        className={
                            classNames(
                                fontAwesome.fa,
                                fontAwesome['fa-search'],
                                styles.searchIcon
                            )
                        }
                    />
                </div>
                <ul>
                    {
                        this.props.itemsListEqual
                            ? <li onClick={this.props.setItem()}>{this.props.selectTitle}</li>
                            : null
                    }

                    {this.props.itemsList.map(item => (
                        <li key={item.id} onClick={this.props.setItem(item.id, item.title, item.slug)}>
                            {item.title}
                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }

}