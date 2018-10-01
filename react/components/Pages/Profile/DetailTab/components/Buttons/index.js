import React from 'react';


import styles from './styles.scss';


const Buttons = (props) => (

    <div className={styles.buttons}>

        <button
            onClick={props.saveDetail}
        >
            <span>Сохранить</span>
        </button>


        <button
            onClick={props.cancelEditDetail}
        >
            <span>Отменить</span>
        </button>

    </div>
);

export default Buttons;