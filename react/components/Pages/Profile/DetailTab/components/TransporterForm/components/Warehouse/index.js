import React from 'react';
import classNames from 'classnames';


import styles from '../../../../styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import DropDown from '../../../../../../Ckeckout/DropDown';
import Loader from '../../../../../../../Loaders/SpinLoader';


const Warehouse = (props) => (

    <li className={styles.detailItem}>
        <span className={styles.itemLeft}>Склад:</span>

        {
            props.editMode
                ?
                <div className={styles.itemRight}>

                    <div
                        className={
                            classNames(
                                styles.selectInput,
                                props.deliveryWarehouse !== 'Выберите склад'
                                    ? styles.active
                                    : null,
                            )}
                        onClick={props.deliveryWarehouseDropDownToggle}
                    >
                        <span>
                            {props.deliveryWarehouse.length > 25
                                ? props.deliveryWarehouse.slice(0, 25) + '...'
                                : props.deliveryWarehouse
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

                        {props.transporterWarehousesIsLoading && <Loader/>}
                    </div>

                    {
                        props.deliveryWarehouseDropDownVisible &&
                        <DropDown
                            searchVisible={true}
                            itemsList={props.deliveryWarehouseList}
                            setItem={props.setDeliveryWarehouse}
                            dropDownClose={props.deliveryWarehouseDropDownToggle}
                        />
                    }

                </div>
                :
                <span className={styles.itemRight}>{props.deliveryWarehouse}</span>
        }

    </li>

);

export default Warehouse;