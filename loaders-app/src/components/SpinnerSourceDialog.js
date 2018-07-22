import React from 'react';
import {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DialogTabContent from './DialogTabContent';

const style = {
    tabLabel: {
        fontSize: 14
    }
}

class SpinnerSourceDialog extends Component {

    state = {
        value: 0
    };

    handleClose = () => {
        this.props.onClose();
    };

    handleTabChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        
        const {open, spinnerHTML, spinnerCSS, spinnerJS} = this.props;

        return (
            <Dialog open={open} onClose={this.handleClose}>
                <Tabs value={this.state.value} onChange={this.handleTabChange} fullWidth={true} >
                    <Tab label="HTML" classes={{label: this.props.classes.tabLabel}} />
                    <Tab label="CSS" classes={{label: this.props.classes.tabLabel}} />
                </Tabs>
                {this.state.value === 0 && <DialogTabContent text={spinnerHTML} />}
                {this.state.value === 1 && <DialogTabContent text={spinnerCSS} />}
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

export default withStyles(style)(SpinnerSourceDialog);