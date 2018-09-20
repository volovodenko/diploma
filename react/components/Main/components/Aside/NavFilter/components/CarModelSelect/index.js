import React from 'react';
import classNames from 'classnames';


import styles from '../../styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import DropDown from '../DropDown';
import Loader from '../../../../../../SelectLoader';


export default props => (
    <li
        className={
            props.carModelsFilterIsLoading
                ? null
                : styles[props.carModelClassName]}
    >
        <div className={styles.select} onClick={props.carModelsDropDownToggle}>
                        <span>
                            {props.carModelTitle.length ? props.carModelTitle : 'Выберите модель'}
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
            {props.carModelsFilterIsLoading ? <Loader/> : null}
        </div>
        {
            props.carModelsVisible
                ?
                props.carModelsFilterLoaded
                    ? <DropDown
                        selectTitle='Выберите модель'
                        itemsList={props.carModelsFilterList}
                        setItem={props.setCarModel}
                        dropDownClose={props.carModelsDropDownToggle}
                    />
                    : null
                : null
        }
    </li>
)