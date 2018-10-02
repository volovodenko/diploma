import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';



const DeleteFromFavorites = ({deleteFromFavorites}) => (
    <div
        className={styles.delete}
        onClick={deleteFromFavorites}
    >
        <i
            className={
                classNames(
                    fontAwesome.fa,
                    fontAwesome['fa-times'],
                )
            }
        />
        убрать
    </div>
);

export default DeleteFromFavorites;
