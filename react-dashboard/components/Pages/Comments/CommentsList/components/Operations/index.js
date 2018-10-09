import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


const Operations = (props) => (
    <div className={styles.operations}>
        <div
            className={styles.del}
            onClick={props.deleteComment(props.item.id)}
        >
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-trash-o'],
                        fontAwesome['fa-lg'],
                    )
                }
                aria-hidden='true'
            />
            удалить
        </div>
        <div
            className={styles.edit}
            onClick={props.editComment(props.item.id, props.item.comment)}
        >
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-pencil-square-o'],
                        fontAwesome['fa-lg'],
                    )
                }
                aria-hidden='true'
            />
            редактировать
        </div>
    </div>
);


export default Operations;