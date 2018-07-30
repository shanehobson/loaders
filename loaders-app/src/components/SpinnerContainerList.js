import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import SpinnerContainer from './SpinnerContainer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class SpinnerContainerList extends Component {

    render() {
        return (
            <div className='SpinnerContainerList-container'>
                <div className='SpinnerContainerList-gridContainer'>
                    <Grid container spacing={40} justify={'center'}>
                        {this.props.spinnerDtoArray.map((spinnerDTO) => {
                            return (
                                <Grid item key={spinnerDTO.id} >
                                    <SpinnerContainer spinnerDTO={spinnerDTO} />
                                </Grid>
                            )}
                        )}
                    </Grid>
                </div>
            </div>
        );
    }

}

SpinnerContainerList.propTypes = {
    spinnerDtoArray: PropTypes.array.isRequired
}

export default SpinnerContainerList;