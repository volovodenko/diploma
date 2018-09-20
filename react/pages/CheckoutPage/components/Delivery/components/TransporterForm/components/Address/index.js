import React from 'react';
import classNames from 'classnames';


import styles from '../../../../styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import DropDown from '../../../../../DropDown';
import Loader from '../../../../../../../../components/SelectLoader';


const Address = props => (

    <li className={styles.select}>
        <div className={styles.selectItem}>
            <span>Адрес доставки:</span>
            <div
                className={
                    classNames(
                        styles.selectInput,
                        props.deliveryAddress !== 'Выберите город'
                            ? styles.active
                            : null,
                    )
                }
                onClick={props.deliveryAddressDropDownToggle}
            >
                        <span>
                            {
                                props.deliveryAddress.length > 25
                                    ? props.deliveryAddress.slice(0, 25) + '...'
                                    : props.deliveryAddress
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
                {
                    props.transporterCitiesIsLoading
                        ? <Loader/>
                        : null
                }

            </div>
        </div>
        {
            props.deliveryAddressDropDownVisible
                ?
                <DropDown
                    searchVisible={true}
                    itemsList={props.deliveryAddressList}
                    setItem={props.setDeliveryAddress}
                    dropDownClose={props.deliveryAddressDropDownToggle}
                />
                : null
        }
    </li>
);

export default Address;