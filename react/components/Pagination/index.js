import React, {Component, Fragment} from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


export default class Pagination extends Component {

    constructor(props) {
        super(props);

        this.state = {
            arrayPages: [],
            countPages: 0
        };
    }

    static getDerivedStateFromProps(props) {
        const countPages = Math.ceil(props.totalItemsCount / props.itemsCountPerPage);

        const arrayPages = [];

        let startPage = props.activePage - Math.floor(props.pageRangeDisplayed / 2);
        //если в конце
        startPage = props.activePage >= (countPages - Math.floor(props.pageRangeDisplayed / 2))
            ? countPages - (props.pageRangeDisplayed - 1)
            : startPage;
        //если в начале
        startPage = startPage < 1 ? 1 : startPage;

        let endPage = startPage + (props.pageRangeDisplayed - 1);
        //если в начале
        endPage = endPage < props.pageRangeDisplayed ? props.pageRangeDisplayed : endPage;
        //если в конце
        endPage = endPage > countPages ? countPages : endPage;


        for (let i = startPage; i <= endPage; i++) {
            arrayPages.push(i);
        }


        return {
            arrayPages,
            countPages,
        };
    }

    render() {
        return (

            this.state.countPages > 1
                ?
                <ul className={styles.pagination}>
                    {
                        this.props.activePage > 1
                            ?
                            <Fragment>
                                <li onClick={::this.firstPage}>
                                    <i
                                        className={
                                            classNames(
                                                fontAwesome.fa,
                                                fontAwesome['fa-angle-double-left'],
                                                fontAwesome['fa-lg'],
                                            )
                                        }
                                        aria-hidden='true'
                                    />
                                </li>
                                <li onClick={::this.prevPage}>
                                    <i
                                        className={
                                            classNames(
                                                fontAwesome.fa,
                                                fontAwesome['fa-angle-left'],
                                                fontAwesome['fa-lg'],
                                            )
                                        }
                                        aria-hidden='true'
                                    />
                                </li>
                            </Fragment>
                            : null
                    }

                    {this.pageTemplate()}


                    {
                        this.props.activePage < this.state.countPages
                            ?
                            <Fragment>
                                <li onClick={::this.nextPage}>
                                    <i
                                        className={
                                            classNames(
                                                fontAwesome.fa,
                                                fontAwesome['fa-angle-right'],
                                                fontAwesome['fa-lg'],
                                            )
                                        }
                                        aria-hidden='true'
                                    />
                                </li>
                                <li onClick={::this.lastPage}>
                                    <i
                                        className={
                                            classNames(
                                                fontAwesome.fa,
                                                fontAwesome['fa-angle-double-right'],
                                                fontAwesome['fa-lg'],
                                            )
                                        }
                                        aria-hidden='true'
                                    />
                                </li>
                            </Fragment>
                            : null
                    }

                </ul>
                : null

        );
    }

    /***************************************************************************
     *
     **************************************************************************/

    pageTemplate() {

        return this.state.arrayPages.map((item, index) => {

            return (
                <li className={this.props.activePage === (item) ? styles.active : null}
                    key={index + 1}
                    onClick={::this.setPage}
                >
                    {item}
                </li>
            )
        });
    }


    setPage(e) {
        //при клике на текущую страницу - никуда не переходим
        if (this.props.activePage !== +e.currentTarget.innerHTML) {
            this.props.onChange(+e.currentTarget.innerHTML);
        }
    }


    prevPage() {
        if (this.props.activePage === 1) {
            return;
        }

        this.props.onChange(this.props.activePage - 1);
    }


    nextPage() {
        if (this.props.activePage === this.countPages) {
            return;
        }

        this.props.onChange(this.props.activePage + 1);
    }

    firstPage() {
        if (this.props.activePage === 1) {
            return;
        }

        this.props.onChange(1);
    }

    lastPage() {
        if (this.props.activePage === this.state.countPages) {
            return;
        }

        this.props.onChange(this.state.countPages);
    }

}