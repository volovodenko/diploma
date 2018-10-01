import React from 'react';
import classNames from 'classnames';


import styles from '../../../../styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import DropDown from '../../../../../../Ckeckout/DropDown';
import Loader from '../../../../../../../Loaders/SpinLoader';


const Address = (props) => (

    <li className={styles.detailItem}>
        <span className={styles.itemLeft}>Адрес доставки:</span>

        {
            props.editMode
                ?
                <div className={styles.itemRight}>

                    <div
                        className={
                            classNames(
                                styles.selectInput,
                                props.deliveryAddress !== 'Выберите город'
                                    ? styles.active
                                    : null,
                            )}
                        onClick={props.deliveryAddressDropDownToggle}
                    >
                        <span>
                            {props.deliveryAddress.length > 25
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

                        {props.transporterCitiesIsLoading && <Loader/>}
                    </div>

                    {
                        props.deliveryAddressDropDownVisible &&
                        <DropDown
                            searchVisible={true}
                            itemsList={props.deliveryAddressList}
                            setItem={props.setDeliveryAddress}
                            dropDownClose={props.deliveryAddressDropDownToggle}
                        />
                    }

                </div>
                :
                <span className={styles.itemRight}>{props.deliveryAddress}</span>
        }

    </li>

);

export default Address;