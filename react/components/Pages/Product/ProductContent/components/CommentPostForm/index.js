import React, {Component} from 'react';

import styles from './styles.scss';
import {COMMENT_MAX_LENGTH} from '../../../../../../config/index';
import CommentPostFormController from '../../../../../../controllers/ComponentCotrollers/Product/CommentPostFormController';


@CommentPostFormController()
export default class CommentPostForm extends Component {

    render() {

        return (
            <section className={styles.commentForm}>

                <div className={styles.comment}>
                    <textarea
                        onChange={this.props.changeSymbolsLeft}
                        placeholder={this.props.userLoggedIn
                            ? 'Оставьте отзыв о товаре'
                            : 'Отзывы могут оставлять только зарегистрированные пользователи'
                        }
                        ref={this.props.formRef}
                        onKeyDown={this.props.keyDown}
                    />
                    <span
                        className={this.props.symbolsLeft < 0 ? styles.warning : null}
                    >
                        {this.props.symbolsLeft}
                        </span>
                </div>

                <div className={styles.postButton}>
                    <button
                        disabled={
                            !this.props.userLoggedIn ||
                            this.props.symbolsLeft === COMMENT_MAX_LENGTH ||
                            this.props.symbolsLeft < 0
                        }
                        onClick={this.props.saveComment}
                    >
                        Оставить отзыв
                    </button>
                </div>

            </section>


        )
    }
}