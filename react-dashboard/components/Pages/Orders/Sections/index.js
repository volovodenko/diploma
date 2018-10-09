import React from 'react';


import styles from './styles.scss';
import OrdersList from './components/OrdersList';


const Sections = (props) => (
    <div className={styles.sections}>

        <div className={styles.sectionLeft}>

            <h3>Новые:</h3>

            {
                !props.newOrdersList.length
                    ?
                    <p className={styles.null}>Нет заказов</p>
                    :
                    <OrdersList
                        ordersList={props.newOrdersList}
                    />
            }

        </div>


        <div className={styles.sectionRight}>

            <h3>Принято:</h3>

            {
                !props.ordersList.length
                    ?
                    <p className={styles.null}>Нет заказов</p>
                    :
                    <OrdersList
                        ordersList={props.ordersList}
                    />
            }
        </div>

    </div>
);


export default Sections;