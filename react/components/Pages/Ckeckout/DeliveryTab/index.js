import React, {Component} from 'react';


import styles from './styles.scss';
import Buttons from '../Buttons/index';
import DeliveryMethod from './components/DeliveryMethod/index';
import TransporterForm from './components/TransporterForm/index';
import DeliveryTabController from '../../../../controllers/ComponentCotrollers/Checkout/DeliveryTabController'


@DeliveryTabController()
export default class DeliveryTab extends Component {

    render() {

        return (
            <section className={styles.delivery}>
                <h3>Уточнение деталей доставки</h3>

                <ul className={styles.form}>
                    <li>
                        <label>
                            E-mail:
                            <input
                                type='email'
                                ref={this.props.emailRef}
                                value={this.props.email}
                                onChange={this.props.onChangeEmail}
                            />
                        </label>
                    </li>

                    <DeliveryMethod {...this.props}/>

                    {
                        this.props.transporterFormVisible
                            ? <TransporterForm {...this.props}/>
                            : null
                    }

                    <li>
                        <label>
                            Получатель:
                            <input
                                type='text'
                                ref={this.props.fioRef}
                                value={this.props.fio}
                                onChange={this.props.onChangeFio}
                            />
                        </label>
                    </li>

                </ul>

                <Buttons prevPage={this.props.prevPage} nextPage={this.props.nextPage}/>

            </section>
        );
    }

}