import React, {Component} from 'react';


import styles from './styles.scss';


export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        });

        console.error(info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={styles.error}>
                    <h2>Упс....что то пошло не так. Ошибка в работе приложения</h2>
                </div>
            );
        }

        return this.props.children;
    }
}