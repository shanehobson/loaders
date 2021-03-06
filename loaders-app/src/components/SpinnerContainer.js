import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import SpinnerSourceDialog from './SpinnerSourceDialog';

class SpinnerContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            spinnerSourceDialogOpen: false
        }
    }

    handleContainerClicked = () => {
        this.setState({
            spinnerSourceDialogOpen: true
        });
    }

    handleClose = () => {
        this.setState({
            spinnerSourceDialogOpen: false
        });
    }

    render() {
        
        const { spinnerComponent, html: spinnerHTML, css: spinnerCSS, javascript: spinnerJS } = this.props.spinnerDTO;

        return (
            <div>
                <Card className='SpinnerContainer-spinnerContainer' raised={true} onClick={this.handleContainerClicked} >
                    {spinnerComponent}
                </Card>
                <SpinnerSourceDialog open={this.state.spinnerSourceDialogOpen} spinnerHTML={spinnerHTML} spinnerCSS={spinnerCSS} spinnerJS={spinnerJS} onClose={this.handleClose} />
            </div>
        );
    }
}

SpinnerContainer.propTypes = {
    spinnerDTO: PropTypes.object.isRequired
}

export default SpinnerContainer;