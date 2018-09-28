import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import ucFirst from '../../../../../../../../helpers/ucFirst';
import {getDate} from '../../../../../../../../helpers/getDate';


const CommentsList = props => props.comments.map(item => (
    <li key={item.id} className={styles.item}>

        <div className={styles.header}>
            <span className={styles.author}>{ucFirst(item.author)}</span>
            <span className={styles.date}>{getDate(item.created_at)}</span>
        </div>

        <p className={styles.comment}>{item.comment}</p>

        <div className={styles.footer}>
            <div className={styles.votes}>

                <div className={styles.vote}>
                    <div
                        className={
                            classNames(
                                props.userLoggedIn ? styles.up : null,
                                props.userLoggedIn && item.votes.currentUserVoteUp
                                    ? styles.active
                                    : null
                            )
                        }
                        onClick={props.saveVote(item.id, 'up')}
                        title={
                            !props.userLoggedIn
                                ? 'Доступно для зарегистрированных пользователей'
                                : ''
                        }
                    >
                        <i
                            className={
                                classNames(
                                    fontAwesome.fa,
                                    fontAwesome['fa-thumbs-up'],
                                )
                            }
                            aria-hidden='true'
                        />
                        <span>
                            {item.votes.votesUp}
                        </span>
                    </div>
                </div>

                <div className={styles.vote}>
                    <div
                        className={
                            classNames(
                                props.userLoggedIn ? styles.down : null,
                                props.userLoggedIn && item.votes.currentUserVoteDown
                                    ? styles.active
                                    : null
                            )
                        }
                        onClick={props.saveVote(item.id, 'down')}
                        title={
                            !props.userLoggedIn
                                ? 'Доступно для зарегистрированных пользователей'
                                : ''
                        }
                    >
                        <i className={
                            classNames(
                                fontAwesome.fa,
                                fontAwesome['fa-thumbs-down'],
                            )
                        }
                           aria-hidden='true'/>
                        <span>
                            {item.votes.votesDown}
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.reply}>
            </div>

        </div>

    </li>
));

export default CommentsList;