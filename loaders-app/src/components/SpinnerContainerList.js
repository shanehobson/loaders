import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import SpinnerContainer from './SpinnerContainer';

class SpinnerContainerList extends Component {

    render() {
        return (
            <div className='container'>
            {this.props.spinnerDtoArray.map((spinnerDTO) => {
                console.log(spinnerDTO);
                return <SpinnerContainer spinnerDTO={spinnerDTO} key={spinnerDTO.id} />;
            })}
            </div>
        );
    }

}

SpinnerContainerList.propTypes = {
    spinnerDtoArray: PropTypes.array.isRequired
}

export default SpinnerContainerList;