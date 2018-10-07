import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import CommentsController from '../../controllers/PageControllers/CommentsController';
import ucFirst from '../../../react/helpers/ucFirst';
import {getDate} from '../../../react/helpers/getDate';
import PageLoader from '../../components/Loaders/PageLoader';
import {COMMENT_MAX_LENGTH} from '../../../react/config';


@CommentsController()
export default class Comments extends Component {

    render() {

        return (
            <div className={styles.comments}>
                <h1>Отзывы пользователей</h1>

                <ul className={styles.commentsList}>
                    {
                        this.props.comments.map(item => (
                            <li key={item.id} className={styles.item}>
                                <div className={styles.comment}>

                                    <div className={styles.header}>
                                        <div>
                                            <span className={styles.author}>{ucFirst(item.author)}</span>
                                            <span className={styles.date}>{getDate(item.created_at)}</span>
                                        </div>
                                        <div>
                                            <span className={styles.product}>Для продукта:</span>
                                            <Link to={`/parts/${item.product_slug}`} target='_blank'>
                                                {item.product_title}
                                            </Link>
                                        </div>
                                    </div>

                                    {
                                        this.props.editCommentId === item.id
                                            ?
                                            <Fragment>
                                                <div className={styles.commentChange}>
                                                    <textarea
                                                        ref={this.props.commentRef}
                                                        onChange={this.props.onChangeComment}
                                                        value={this.props.comment}
                                                        onKeyDown={this.props.keyDown}
                                                    />
                                                    <span
                                                        className={this.props.symbolsLeft < 0 ? styles.warning : null}
                                                    >
                                                        {this.props.symbolsLeft}
                                                    </span>
                                                </div>
                                                <div className={styles.buttons}>
                                                    <button
                                                        onClick={this.props.cancelEdit}
                                                    >
                                                        Отмена
                                                    </button>
                                                    <button
                                                        disabled={
                                                            this.props.symbolsLeft === COMMENT_MAX_LENGTH ||
                                                            this.props.symbolsLeft < 0
                                                        }
                                                        onClick={this.props.saveComment}
                                                    >
                                                        Сохранить
                                                    </button>
                                                </div>
                                            </Fragment>
                                            :
                                            <p>{item.comment}</p>
                                    }

                                </div>

                                <div className={styles.operations}>
                                    <div
                                        className={styles.del}
                                        onClick={this.props.deleteComment(item.id)}
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
                                        onClick={this.props.editComment(item.id, item.comment)}
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
                            </li>
                        ))
                    }
                </ul>

                <PageLoader styles={styles}/>
            </div>

        );

    }

}