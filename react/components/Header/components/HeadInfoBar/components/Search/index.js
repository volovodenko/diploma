import React, {Component} from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import SearchController from '../../../../../../controllers/ComponentCotrollers/Header/SearchController';


@SearchController()
export default class Search extends Component {

    render() {

        return (
            <div
                className={
                    classNames(
                        styles.search,
                        this.props.headInfoFixed ? styles.fixed : null
                    )
                }
            >
                <div className={styles.input}>
                    <input type='text'
                           placeholder='Поиск запчастей'
                           onChange={this.props.onChangeInput}
                           ref={this.props.inputSearch}
                    />
                    {
                        this.props.clearIconVisible
                            ? <i
                                className={
                                    classNames(
                                        fontAwesome.fa,
                                        fontAwesome['fa-times'],
                                        fontAwesome['fa-lg'],
                                        styles.timesIcon
                                    )
                                }
                                onClick={this.props.clearInput}
                            />
                            : null
                    }
                    <i
                        className={
                            classNames(
                                fontAwesome.fa,
                                fontAwesome['fa-search'],
                                fontAwesome['fa-lg'],
                                styles.searchIcon
                            )
                        }
                    />
                </div>

                {
                    !this.props.headInfoFixed
                        ?
                        <div className={styles.popular}>
                            <span>Популярные запросы:</span>
                            <span className={styles.value} onClick={this.props.setInputValue}>ГБО</span>
                            <span className={styles.value} onClick={this.props.setInputValue}>масло</span>
                            <span className={styles.value} onClick={this.props.setInputValue}>свечи</span>
                            <span className={styles.value} onClick={this.props.setInputValue}>тосол</span>
                        </div>
                        : null
                }

            </div>
        );
    }
}