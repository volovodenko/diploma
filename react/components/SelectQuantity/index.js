import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


export default props => (
    <div
        className={
            classNames(
                styles.selectQuantity,
                props.styles.selectQuantity, //размер из родителя
                props.selectDropDownActive ? styles.active : null
            )
        }
    >
        <input
            type='text'
            value={props.buyQuantity}
            onChange={props.onChangeInput}
            ref={props.inputQuantity}
            onClick={props.setDropDownActive}
        />

        <div
            onClick={props.dropDownVisibleToggle}
            className={styles.arrowDown}
            ref={props.dropDownArrow}
        >
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-chevron-down'],
                    )
                }
                aria-hidden='true'
            />
        </div>

    </div>
)