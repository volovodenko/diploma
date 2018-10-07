import React, {Component} from 'react';
import classNames from 'classnames';


import styles from  './styles.scss';


export default class Login extends Component {

    render() {

        return (
           <div>
               <h3>Вход</h3>
               <label>E-mail или логин:<input type='text' ref={this.props.userName}/></label>
               <label>Пароль:<input type='password' ref={this.props.passwordLogin}/></label>
               <button
                   // onClick={this.props.login}
                   className={
                       classNames(
                           styles.actionButton,
                       )
                   }
               >
                   Вход
               </button>
           </div>
        );

    }

}