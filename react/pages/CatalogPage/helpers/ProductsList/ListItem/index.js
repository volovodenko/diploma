import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import classNames from 'classnames';

import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


export default class ListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            buyQuantity: '1',
            selectDropDownActive: false,
            dropDownVisible: false
        };

        this.inputQuantity = React.createRef();
        this.dropDownArrow = React.createRef();
        this.dropDown = React.createRef();

        this.handleClickOutside = ::this.handleClickOutside;
    }


    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, false);
    }


    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, false);
    }


    render() {
        return (
            <li className={styles.productItem}>
                <div className={styles.image}>
                    <img
                        src={`/storage/img/parts/${this.props.item.id}/${this.props.item.image}`}
                        alt={this.props.item.title}
                    />
                </div>

                <div className={styles.content}>
                    <div className={styles.title}>
                        <Link to={`/parts/${this.props.item.slug}`}>
                            {this.props.item.title}
                        </Link>
                    </div>
                    <div className={styles.info}>
                        <ul className={styles.infoLeft}>
                            <li>{this.props.item.manufacturer}</li>
                            <li>Код товара: {this.props.item.code}</li>
                            <li>Кат. номер: {this.props.item.catalog_number}</li>
                            <li>Зав. номер: {this.props.item.factory_number}</li>
                        </ul>

                        <ul className={styles.infoRight}>
                            <li className={styles.amount}>
                                {
                                    this.props.item.amount === 0
                                        ?
                                        <Fragment>
                                            <i
                                                className={
                                                    classNames(
                                                        fontAwesome.fa,
                                                        fontAwesome['fa-times-circle-o'],
                                                        fontAwesome['fa-lg'],
                                                        styles.timesCircle
                                                    )
                                                }
                                                aria-hidden='true'
                                            />
                                            <span>Нет в наличии</span>
                                        </Fragment>
                                        : null
                                }
                                {
                                    this.props.item.amount <= 10 && this.props.item.amount > 0
                                        ?
                                        <Fragment>
                                            <i
                                                className={
                                                    classNames(
                                                        fontAwesome.fa,
                                                        fontAwesome['fa-arrow-circle-o-down'],
                                                        fontAwesome['fa-lg'],
                                                        styles.arrowCircleDown
                                                    )
                                                }
                                                aria-hidden='true'
                                            />
                                            <span>Заканчивается</span>
                                        </Fragment>
                                        : null

                                }
                                {
                                    this.props.item.amount > 10
                                        ?
                                        <Fragment>
                                            <i
                                                className={
                                                    classNames(
                                                        fontAwesome.fa,
                                                        fontAwesome['fa-check-circle-o'],
                                                        fontAwesome['fa-lg'],
                                                        styles.checkCircle
                                                    )
                                                }
                                                aria-hidden='true'
                                            />
                                            <span>В наличии</span>
                                        </Fragment>
                                        : null

                                }
                            </li>

                            <li
                                className={
                                    classNames(
                                        styles.price,
                                        this.props.item.amount === 0 ? styles.disabled : null
                                    )
                                }
                            >
                                {(this.props.item.price / 100).toFixed(2)} грн.
                            </li>

                        </ul>
                    </div>

                    <div className={styles.buy}>
                        <span>Кол-во:</span>
                        {this.selectDropDown()}
                        <button
                            id={this.props.item.id}
                            className={this.props.item.amount === 0 ? styles.disable : null}
                            onClick={::this.addToCart}
                        >
                            <i
                                className={
                                    classNames(
                                        fontAwesome.fa,
                                        fontAwesome['fa-shopping-cart'],
                                        fontAwesome['fa-lg'],
                                    )
                                }
                                aria-hidden='true'
                            />
                            <span>купить</span>
                        </button>
                    </div>

                </div>

                {this.state.dropDownVisible ? this.dropDownRender() : null}

            </li>
        )

    }

    /***************************************************************************
     *
     **************************************************************************/


    selectDropDown() {
        return (
            <div
                className={
                    classNames(
                        styles.selectDropDown,
                        this.state.selectDropDownActive ? styles.active : null
                    )
                }
            >
                <input
                    type='text'
                    value={this.state.buyQuantity}
                    onChange={::this.onChangeInput}
                    ref={this.inputQuantity}
                    onClick={::this.setDropDownActive}
                />

                <div
                    onClick={::this.dropDownVisibleToggle}
                    className={styles.arrowDown}
                    ref={this.dropDownArrow}
                >
                    <i
                        className={
                            classNames(
                                fontAwesome.fa,
                                fontAwesome['fa-chevron-down'],
                            )
                        }
                        aria-hidden='true'
                    />
                </div>

            </div>
        )
    }


    handleClickOutside(e) {
        if (
            !e.composedPath().includes(this.inputQuantity.current)
            && !e.composedPath().includes(this.dropDown.current)
            && this.state.selectDropDownActive
        ) {

            if (this.state.buyQuantity === '') {
                this.setState({
                    buyQuantity: '1'
                })
            }

            this.setDropDownInactive();
        }


        if (
            !e.composedPath().includes(this.dropDownArrow.current)
            && this.state.dropDownVisible
        ) {
            this.dropDownVisibleToggle();
        }
    }


    onChangeInput() {
        const buyQuantity = this.inputQuantity.current.value;

        if (!+buyQuantity && buyQuantity !== '') {
            return;
        }

        this.setState({
            buyQuantity
        })
    }

    setDropDownActive() {
        if (!this.state.selectDropDownActive) {
            this.setState({
                selectDropDownActive: true
            })
        }
    }

    setDropDownInactive() {
        if (this.state.selectDropDownActive) {
            this.setState({
                selectDropDownActive: false
            })
        }
    }


    dropDownVisibleToggle() {
        this.setState({
            dropDownVisible: !this.state.dropDownVisible
        })
    }


    addToCart() {
        if (this.props.item.amount === 0 || this.state.buyQuantity === '') {
            return;
        }

        const order = {
            ...this.props.item,
            buyQuantity: +this.state.buyQuantity
        };

        this.props.onPutProductIntoCart(order);
    }


    dropDownRender() {
        const mockArrayData = [];

        for (let i = 1; i <= 5; i++) {
            mockArrayData.push(i);
        }

        return (
            <ul className={styles.dropDown} ref={this.dropDown}>
                {
                    mockArrayData.map(item =>
                        <li key={item} onClick={this.setBuyQuantity.bind(this, item)}>
                            {item}
                        </li>
                    )
                }
                <li onClick={this.setBuyQuantity.bind(this, 10)}>10</li>
                <li onClick={::this.inputQuantityFocus}>...</li>
            </ul>
        )
    }


    setBuyQuantity(buyQuantity) {
        this.setState({
            buyQuantity
        })
    }

    inputQuantityFocus() {
        this.setDropDownActive();
        this.inputQuantity.current.focus();

    }
}