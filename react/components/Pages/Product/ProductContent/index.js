import React, {Fragment} from 'react';


import styles from './styles.scss';
import Image from './components/Image';
import Info from './components/Info';
import CommentPostForm from './components/CommentPostForm';
import CommentsList from './components/Comments';


const ProductContent = (props) => (
    <Fragment>
        <h1 className={styles.title}>{props.product.title}</h1>


        <div className={styles.partItem}>
            <Image product={props.product}/>
            <Info {...props}/>
        </div>

        <div className={styles.description}>
            <h3>Описание</h3>
            <p>{props.product.description}</p>
        </div>

        <div className={styles.comments}>
            <CommentPostForm productId={props.product.id}/>
            <CommentsList productId={props.product.id}/>
        </div>
    </Fragment>

);

export default ProductContent;