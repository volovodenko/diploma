import React from 'react';


import styles from './styles.scss';
import Header from './components/Header';
import EditComment from './components/EditComment';
import Operations from './components/Operations';


const CommentsList = (props) => (
    <ul className={styles.commentsList}>
        {
            props.comments.map(item => (
                <li key={item.id} className={styles.item}>
                    <div className={styles.comment}>

                        <Header item={item} />

                        {
                            props.editCommentId === item.id
                                ?
                                <EditComment
                                    commentRef={props.commentRef}
                                    onChangeComment={props.onChangeComment}
                                    comment={props.comment}
                                    keyDown={props.keyDown}
                                    symbolsLeft={props.symbolsLeft}
                                    cancelEdit={props.cancelEdit}
                                    saveComment={props.saveComment}
                                />
                                :
                                <p>{item.comment}</p>
                        }

                    </div>

                    <Operations
                        deleteComment={props.deleteComment}
                        editComment={props.editComment}
                        item={item}
                    />
                </li>
            ))
        }
    </ul>
);


export default CommentsList;