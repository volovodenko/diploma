import React from 'react';


import styles from '../../styles.scss';


const Phone = (props) => (

    <li className={styles.detailItem}>
        <span className={styles.itemLeft}>Телефон:</span>

        {
            props.editMode
                ?
                <div className={styles.itemRight}>
                    <input
                        type='tel'
                        value={props.phone}
                        onChange={props.onChangePhone}
                        ref={props.phoneRef}
                        placeholder='+380-__-___-__-__'
                    />
                </div>
                :
                <span className={styles.itemRight}>{props.phone}</span>
        }

    </li>

);

export default Phone;