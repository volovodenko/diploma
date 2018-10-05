import React from 'react';
import classNames from 'classnames';


import styles from '../../styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import DropDown from '../../../../Ckeckout/DropDown';


const DeliveryMethod = (props) => (

    <li className={styles.detailItem}>
        <span className={styles.itemLeft}>Способ доставки:</span>

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
                        onClick={props.deliveryMethodDropDownToggle}
                    >
                        <span>
                            {props.currentDeliveryMethod.length > 25
                                ? props.currentDeliveryMethod.slice(0, 25) + '...'
                                : props.currentDeliveryMethod
                            }
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
                        props.deliveryMethodDropDownVisible &&
                        <DropDown
                            searchVisible={false}
                            itemsList={props.deliveryMethods}
                            setItem={props.setDeliveryMethod}
                            dropDownClose={props.deliveryMethodDropDownToggle}
                            styles={styles}
                        />
                    }

                </div>
                :
                <span className={styles.itemRight}>{props.currentDeliveryMethod}</span>
        }

    </li>

);

export default DeliveryMethod;