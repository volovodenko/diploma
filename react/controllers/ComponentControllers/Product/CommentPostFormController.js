import React, {Component} from 'react';


import {COMMENT_MAX_LENGTH} from '../../../config';
import CommentPostFormContainer from '../../../containers/ComponentContainers/Product/CommentPostFormContainer';


export default () => View => {

    @CommentPostFormContainer()
    class CommentPostFormController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                symbolsLeft: COMMENT_MAX_LENGTH
            };

            this.formRef = React.createRef();

        }


        render() {
            return <View
                formRef={this.formRef}
                symbolsLeft={this.state.symbolsLeft}
                changeSymbolsLeft={::this.changeSymbolsLeft}
                keyDown={::this.keyDown}
                saveComment={::this.saveComment}
                userLoggedIn={this.props.userLoggedIn}

            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        changeSymbolsLeft() {
            const textLength = this.formRef.current.value.trim().length;

            this.setState({
                symbolsLeft: COMMENT_MAX_LENGTH - textLength
            })
        }

        keyDown(e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                this.saveComment();
            }
        }

        saveComment() {
            const comment = this.formRef.current.value.trim();


            if (this.props.userLoggedIn && this.state.symbolsLeft < COMMENT_MAX_LENGTH && this.state.symbolsLeft >= 0) {
                this.formRef.current.value = '';
                this.formRef.current.blur();

                const data = {
                    comment,
                    product_id: this.props.productId
                };

                this.props.onSaveComment(data);

                this.setState({
                    symbolsLeft: COMMENT_MAX_LENGTH
                })
            }


        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CommentPostFormController;

}