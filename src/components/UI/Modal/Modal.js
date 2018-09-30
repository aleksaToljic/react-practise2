import React, {Component} from 'react';
import classes from './Modal.css';
import Auxx from '../../../hoc/Auxx';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }
    componentWillUpdate() {
        console.log('[Modal] WillUpdate');
    }
    render() {
        return (
            <Auxx>
                <Backdrop clicked={this.props.modalClosed} show={this.props.show}/>
                <div style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}
                     className={classes.Modal}>
                    {this.props.children}
                </div>
            </Auxx>
        );
    }

}

export default Modal;