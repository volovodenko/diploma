import React from 'react';
import classNames from 'classnames';


import styles from '../../styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import DropDown from '../../../../Ckeckout/DropDown';


const Payment = (props) => (

    <li className={styles.detailItem}>
        <span className={styles.itemLeft}>Способ оплаты:</span>

        {
            props.editMode
                ?
                <div className={styles.itemRight}>

                    <div
                        className={
                            classNames(
                                styles.selectInput,
                                styles.active,
                            )}
                        onClick={props.paymentDropDownToggle}
                    >
                        <span>
                            {props.payment}
                        </span>
                        <i
                            className={
                                classNames(
                                    fontAwesome.fa,
                                    fontAwesome['fa-caret-down'],
                                )
                            }
                            aria-hidden='true'
                        />
                    </div>

                    {
                        props.paymentDropDownVisible &&
                        <DropDown
                            searchVisible={false}
                            itemsList={props.paymentsList}
                            setItem={props.onChangePayment}
                            dropDownClose={props.paymentDropDownToggle}
                        />
                    }

                </div>
                :
                <span className={styles.itemRight}>{props.payment}</span>
        }

    </li>

);

export default Payment;