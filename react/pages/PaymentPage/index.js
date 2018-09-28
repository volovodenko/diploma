import React, {Component, Fragment} from 'react';


import styles from './styles.scss';
import PaymentPageController from '../../controllers/PageControllers/PaymentPageController';
import PageLoader from '../../components/Loaders/PageLoader';


@PaymentPageController()
export default class PaymentPage extends Component {

    render() {
        const {paragraph1, paragraphList} = this.props.paymentContent;

        return (
            <div className={styles.payment}>

                <h1>Оплата и доставка</h1>

                {this.props.paymentContentLoaded &&
                <Fragment>
                    <p>
                        {paragraph1.title}
                    </p>
                    <ul className={styles.list}>
                        {paragraph1.list.map(item => (
                            <li key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {
                        paragraphList.map(item => (
                            <p key={item}>
                                {item}
                            </p>
                        ))
                    }

                </Fragment>
                }

                <PageLoader styles={styles}/>

            </div>

        )

    }
}