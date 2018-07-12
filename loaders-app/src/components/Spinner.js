import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';

class Spinner extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        }

        this.handleContainerClicked = this.handleContainerClicked.bind(this);
    }

    handleContainerClicked() {
        if (this.state.expanded) {
            this.setState({
                expanded: false
            });
        } else {
            this.setState({
                expanded: true
            });
        }
    }

    render() {

        const spinnerJson = this.props.spinnerJson;

        return (
            <Card className='Spinner-spinnerContainer' raised={true} onClick={this.handleContainerClicked} >
                <CardHeader title='Rendered spinner placeholder'>
                </CardHeader>
                <Collapse in={this.state.expanded} >Spinner code placeholder</Collapse>
            </Card>
        );
    }

}

Spinner.propTypes = {
    spinnerJson: PropTypes.object.isRequired
}

export default Spinner;