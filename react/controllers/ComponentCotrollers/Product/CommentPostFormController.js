import React, {Component} from 'react';


import CommentPostFormContainer from '../../../containers/ComponentContainers/Product/CommentPostFormContainer';


export default () => View => {

    @CommentPostFormContainer()
    class CommentPostFormController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                symbolsLeft: 250
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
            const maxLength = 250;

            this.setState({
                symbolsLeft: maxLength - textLength
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



            // const data = {
            //     comment
            // };


            if (this.props.userLoggedIn && this.state.symbolsLeft < 250 && this.state.symbolsLeft >= 0) {
                this.formRef.current.value = '';
                this.formRef.current.blur();
                // this.props.onSaveComment(data);

                console.log(comment);

                this.setState({
                    symbolsLeft: 250
                })
            }


        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CommentPostFormController;

}