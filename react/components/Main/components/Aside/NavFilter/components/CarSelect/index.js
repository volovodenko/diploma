import React from 'react';
import classNames from 'classnames';


import styles from '../../styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import DropDown from '../DropDown';


export default props => (
    <li className={styles.enabled}>
        <div className={styles.select} onClick={props.carsDropDownToggle}>
            <span>
                {props.carTitle.length ? props.carTitle : 'Выберите марку'}
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
            props.carsVisible
                ?
                props.carsLoaded
                    ? <DropDown
                        selectTitle='Выберите марку'
                        itemsList={props.carsList}
                        setItem={props.setCar}
                        dropDownClose={props.carsDropDownToggle}
                    />
                    : null
                : null
        }
    </li>
)