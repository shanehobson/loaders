import React, { Component } from 'react';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import { changePage } from '../actions/pagination';

class Paginate extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          currentPage: 1
        }
    }

    handlePageClick = (data) => {
        this.setState({
            currentPage: data.selected+1
        });
        this.props.dispatch(changePage(data.selected+1));
    }

    render() {
        return (
            <div className='container paginate-container'>
                <Grid container justify="center">
                    <Grid item>
                        <ReactPaginate 
                            className='react-paginate'
                            previousLabel={this.state.currentPage !== 1 && "previous"}
                            nextLabel={this.state.currentPage !== this.props.pageCount && "next"}
                            breakLabel={<a href="">...</a>}
                            breakClassName={"break-me"}
                            pageCount={this.props.pageCount}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
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

export default connect()(Paginate);