import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';

class SpinnerSourceDialog extends Component {

    handleClose = () => {
        this.props.onClose();
    }

    render() {
        
        const {open, spinnerHTML, spinnerCSS, spinnerJS} = this.props;

        return (
            <Dialog open={open} onClose={this.handleClose}>
                {spinnerHTML.split('\n')
                .map((line) => 
                    (
                        <p key={line}>
                            {line}
                        </p> 
                    )
                )
                }
            </Dialog>    
        );
    }

}

SpinnerSourceDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    spinnerHTML: PropTypes.string.isRequired,
    spinnerCSS: PropTypes.string.isRequired,
    spinnerJS: PropTypes.string
}

export default SpinnerSourceDialog;