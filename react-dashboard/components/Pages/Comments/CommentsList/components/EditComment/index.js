import React, {Fragment} from 'react';


import styles from './styles.scss';
import {COMMENT_MAX_LENGTH} from '../../../../../../../react/config';


const EditComment = (props) => (
    <Fragment>
        <div className={styles.commentChange}>
            <textarea
                ref={props.commentRef}
                onChange={props.onChangeComment}
                value={props.comment}
                onKeyDown={props.keyDown}
            />
            <span className={props.symbolsLeft < 0 ? styles.warning : null}>
                {props.symbolsLeft}
            </span>
        </div>
        <div className={styles.buttons}>
            <button
                onClick={props.cancelEdit}
            >
                Отмена
            </button>
            <button
                disabled={
                    props.symbolsLeft === COMMENT_MAX_LENGTH ||
                    props.symbolsLeft < 0
                }
                onClick={props.saveComment}
            >
                Сохранить
            </button>
        </div>
    </Fragment>
);


export default EditComment;