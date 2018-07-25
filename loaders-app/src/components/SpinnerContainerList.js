import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import SpinnerContainer from './SpinnerContainer';

class SpinnerContainerList extends Component {

    render() {
        return (
            <div className='container'>
                <GridList cols={6}>
                    {this.props.spinnerDtoArray.map((spinnerDTO) => {
    
                        return (
                            <GridListTile key={spinnerDTO.id}>
                                <SpinnerContainer spinnerDTO={spinnerDTO} />
                            </GridListTile>
                        )}
                    )}
                </GridList>
            </div>
        );
    }

}

SpinnerContainerList.propTypes = {
    spinnerDtoArray: PropTypes.array.isRequired
}

export default SpinnerContainerList;