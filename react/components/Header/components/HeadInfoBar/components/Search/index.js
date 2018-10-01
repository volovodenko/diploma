import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import SearchController from '../../../../../../controllers/ComponentCotrollers/Header/SearchController';
import SpinLoader from '../../../../../Loaders/SpinLoader';


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
                <div
                    className={styles.input}
                    ref={this.props.formSearch}
                >
                    <input type='text'
                           placeholder='Поиск запчастей'
                           onChange={this.props.onChangeInput}
                           ref={this.props.inputSearch}
                    />

                    {
                        this.props.searchIsLoading &&
                        <SpinLoader styles={styles}/>
                    }

                    {
                        this.props.clearIconVisible &&
                        <i
                            className={
                                classNames(
                                    fontAwesome.fa,
                                    fontAwesome['fa-times'],
                                    fontAwesome['fa-lg'],
                                    styles.timesIcon
                                )
                            }
                            onClick={this.props.onClearInput}
                        />
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
                        onClick={this.props.onChangeInput}
                    />
                </div>

                {
                    !this.props.headInfoFixed &&
                    <div className={styles.popular}>
                        <span>Популярные запросы:</span>
                        <span className={styles.value} onClick={this.props.setInputValue}>Авео</span>
                        <span className={styles.value} onClick={this.props.setInputValue}>вал</span>
                        <span className={styles.value} onClick={this.props.setInputValue}>ролик</span>
                        <span className={styles.value} onClick={this.props.setInputValue}>фильтр</span>
                    </div>
                }

                {
                    (this.props.dropDownVisible && this.props.searchLoaded) &&
                    <ul className={
                        classNames(
                            styles.dropDown,
                            this.props.headInfoFixed ? styles.dropDownFixed : null
                        )
                    }
                    >
                        {
                            !this.props.searchList.length
                                ? <li>Нет совпадений</li>
                                :
                                this.props.searchList.map(item => (
                                    <li key={item.id}>
                                        <Link
                                            onClick={this.props.linkClick}
                                            to={`/parts/${item.slug}`}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                        }
                    </ul>
                }

            </div>
        );
    }
}