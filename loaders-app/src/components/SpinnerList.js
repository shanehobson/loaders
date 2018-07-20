import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

class SpinnerList extends Component {

    render() {
        return (
            <div className='container'>
            {this.props.spinners.map((spinner) =>
                <Spinner spinnerJson={spinner} /> )
            }
            </div>
        );
    }

}

SpinnerList.propTypes = {
    spinners: PropTypes.array.isRequired
}

export default SpinnerList;