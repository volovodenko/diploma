import React from 'react';
import classNames from 'classnames';


import styles from '../../styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import DropDown from '../../../DropDown/index';


const DeliveryMethod = props => (

    <li className={styles.select}>
        <div className={styles.selectItem}>
            <span>Способ доставки:</span>
            <div
                className={
                    classNames(
                        styles.selectInput,
                        styles.active,
                    )}
                onClick={props.deliveryMethodDropDownToggle}
            >
                        <span>
                            {props.currentDeliveryMethod}
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
        </div>
        {
            props.deliveryMethodDropDownVisible &&
            <DropDown
                searchVisible={false}
                itemsList={props.deliveryMethods}
                setItem={props.setDeliveryMethod}
                dropDownClose={props.deliveryMethodDropDownToggle}
            />
        }
    </li>
);

export default DeliveryMethod;