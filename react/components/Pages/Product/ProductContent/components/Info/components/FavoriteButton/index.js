import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


const FavoriteButton = (props) => (
    <div className={styles.favoriteButton}>

        <button
            onClick={props.addToFavorites(props.product)}
        >
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-star'],
                    )
                }
                aria-hidden='true'
            />
            <span>в избранное</span>
        </button>
    </div>
);

export default FavoriteButton;