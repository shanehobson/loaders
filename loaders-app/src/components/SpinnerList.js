import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

class SpinnerList extends Component {

    render() {
        return (
            this.props.spinners.map((spinner) =>
                <Spinner spinnerJson={spinner} /> )
        );
    }

}

SpinnerList.propTypes = {
    spinners: PropTypes.array.isRequired
}

export default SpinnerList;