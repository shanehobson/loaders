import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

class Paginate extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          offset: 0,
          pageCount: 10,
          currentPage: 1
        }
    }

    render() {
        return (
            <div className='container paginate-container'>
                <Grid container justify="center">
                    <Grid item>
                        <ReactPaginate 
                            className='react-paginate'
                            previousLabel={this.state.currentPage !== 1 && "previous"}
                            nextLabel={this.state.currentPage !== this.state.pageCount && "next"}
                            breakLabel={<a href="">...</a>}
                            breakClassName={"break-me"}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={5}
                            //onPageChange={this.handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                        />
                    </Grid>
                </Grid>
        </div>
        );
    }

}

Paginate.propTypes = {
    pageCount: PropTypes.number.isRequired
}

export default Paginate;