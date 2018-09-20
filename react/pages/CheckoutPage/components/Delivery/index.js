import React, {Component} from 'react';


import styles from './styles.scss';
import Buttons from '../Buttons';
import DeliveryMethod from './components/DeliveryMethod';
import TransporterForm from './components/TransporterForm';


export default class Delivery extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0); //обнулить прокрутку
    }

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