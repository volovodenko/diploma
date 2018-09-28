import React, {Component} from 'react';

import styles from './styles.scss';
import CommentsList from './components/CommentsList/index';
import PreComments from './components/PreComments/index';
import SpinLoader from '../../../../../Loaders/SpinLoader/index';
import CommentsController from '../../../../../../controllers/ComponentCotrollers/Product/CommentsController';


@CommentsController()
export default class Comments extends Component {

    render() {

        return (
            <ul className={styles.comments}>
                <h3>
                    Отзывы ({this.props.comments.length})
                    {
                        (this.props.commentIsSaving || this.props.commentsIsLoading) &&
                        <SpinLoader styles={styles}/>
                    }

                </h3>

                <CommentsList {...this.props}/>

                {
                    (!this.props.comments.length && !this.props.commentsIsLoading) &&
                    <PreComments
                        message='Отзывы для этого товара отсутствуют. Оставьте первый отзыв'
                    />
                }
                {
                    this.props.commentsIsLoading &&
                    <PreComments
                        message='Загрузка...'
                    />
                }

            </ul>

        )
    }
}