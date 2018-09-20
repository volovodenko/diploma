import React from 'react';
import classNames from 'classnames';


import styles from '../../../../styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import DropDown from '../../../../../DropDown';
import Loader from '../../../../../../../../components/SelectLoader';


const Warehouse = props => (

    <li className={styles.select}>
        <div className={styles.selectItem}>
            <span>Склад:</span>
            <div
                className={
                    classNames(
                        styles.selectInput,
                        props.deliveryWarehouse !== 'Выберите склад'
                            ? styles.active
                            : null,
                    )
                }
                onClick={props.deliveryWarehouseDropDownToggle}
            >
                        <span>
                            {
                                props.deliveryWarehouse.length > 25
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
                {
                    props.transporterWarehousesIsLoading
                        ? <Loader/>
                        : null
                }
            </div>
        </div>
        {
            props.deliveryWarehouseDropDownVisible
                ?
                <DropDown
                    searchVisible={true}
                    itemsList={props.deliveryWarehouseList}
                    setItem={props.setDeliveryWarehouse}
                    dropDownClose={props.deliveryWarehouseDropDownToggle}
                />
                : null
        }
    </li>
);

export default Warehouse;