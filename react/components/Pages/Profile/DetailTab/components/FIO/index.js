import React from 'react';


import styles from '../../styles.scss';


const FIO = (props) => (

    <li className={styles.detailItem}>
        <span className={styles.itemLeft}>ФИО:</span>

        {
            props.editMode
                ?
                <div className={styles.itemRight}>
                    <input
                        type='text'
                        value={props.fio}
                        onChange={props.onChangeFio}
                        ref={props.fioRef}
                    />
                </div>
                :
                <span className={styles.itemRight}>{props.fio}</span>
        }

    </li>

);

export default FIO;