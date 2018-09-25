import React, {Component, Fragment} from 'react';


import styles from './styles.scss';
import ProductPageController from '../../controllers/PageControllers/ProductPageController';
import Image from '../../components/Pages/Product/Image';
import Info from '../../components/Pages/Product/Info';
import Nav from '../../components/NavBar';
import CommentPostForm from '../../components/Pages/Product/CommentPostForm';
import PageLoader from '../../components/Loaders/PageLoader';


@ProductPageController()
export default class ProductPage extends Component {

    render() {

        const {product} = {...this.props};

        return (
            <div className={styles.part}>
                {
                    this.props.navRender
                        ?
                        <Nav
                            {...this.props.historyNavData}
                            productPage={true}
                        />
                        : null
                }

                <h1>{product ? product.title : null}</h1>

                {
                    product
                        ?
                        <Fragment>

                            <div className={styles.partItem}>
                                <Image product={product}/>
                                <Info {...this.props}/>
                            </div>

                            <div className={styles.description}>
                                <h3>Описание</h3>
                                <p>{product.description}</p>
                            </div>

                            <div className={styles.comments}>
                                <h3>Отзывы</h3>
                                <CommentPostForm/>
                            </div>
                        </Fragment>
                        : null
                }


                <PageLoader styles={styles}/>
            </div>
        )

    }
}