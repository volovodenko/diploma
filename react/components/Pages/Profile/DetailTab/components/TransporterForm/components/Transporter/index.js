import React from 'react';
import classNames from 'classnames';


import styles from '../../../../styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import DropDown from '../../../../../../Ckeckout/DropDown';


const Transporter = (props) => (

    <li className={styles.detailItem}>
        <span className={styles.itemLeft}>Перевозчик:</span>

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

                    {
                        props.transporterDropDownVisible &&
                        <DropDown
                            searchVisible={false}
                            itemsList={props.transporters}
                            setItem={props.setTransporter}
                            dropDownClose={props.transporterDropDownToggle}
                        />
                    }

                </div>
                :
                <span className={styles.itemRight}>{props.currentTransporter}</span>
        }

    </li>

);

export default Transporter;