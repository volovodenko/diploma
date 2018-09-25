import React from 'react';
import classNames from 'classnames';


import styles from '../../../../styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import DropDown from '../../../../../DropDown/index';


const Transporter = props => (

    <li className={styles.select}>
        <div className={styles.selectItem} >
            <span>Перевозчик:</span>
            <div
                className={classNames(
                    styles.selectInput,
                    styles.active,
                )}
                 onClick={props.transporterDropDownToggle}
            >
                        <span>
                            {props.currentTransporter}
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
            props.transporterDropDownVisible
                ?
                <DropDown
                    searchVisible={false}
                    itemsList={props.transporters}
                    setItem={props.setTransporter}
                    dropDownClose={props.transporterDropDownToggle}
                />
                : null
        }
    </li>
);

export default Transporter;