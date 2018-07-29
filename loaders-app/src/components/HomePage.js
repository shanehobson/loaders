import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Header from './Header';
import ColorChange from './ColorChange';
import Paginate from './Paginate';
import SpinnerContainerList from './SpinnerContainerList';
import Footer from './Footer';
import spinnerDtoArray from '../spinners-data/SpinnerDTOs';
import '../styles/NavBar.css';
import '../styles/SpinnerContainer.css';
import '../styles/ColorChange.css';
import '../styles/DialogTabContent.css';
import '../styles/LayoutStyles.css';
import '../styles/Header.css';
import '../styles/Pagination.css';
import '../styles/Footer.css';

const spinnersPerPage = 24

class HomePage extends Component {

  getSublistForPage = (page, spinnerDtos) => {
    var startIndex = (page-1)*spinnersPerPage;
    //var startIndex = 25; // use this when you want second page of spinners to automatically load (for dev purposes)
    var endIndex = startIndex+(spinnersPerPage-1);

    if (endIndex > spinnerDtos.length-1) {
      endIndex = spinnerDtos.length-1
    }

    return spinnerDtos.slice(startIndex, endIndex+1);

  }
    
  render() {

    const spinnerDtos = spinnerDtoArray(this.props.spinnerColor)

    const pageCount = Math.ceil((spinnerDtos.length*1.0)/spinnersPerPage);

    return (
      <div>
        <NavBar />
        <Header />
        <ColorChange />
        <SpinnerContainerList spinnerDtoArray={this.getSublistForPage(this.props.page, spinnerDtos)} /> 
        <Paginate pageCount={pageCount}/>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  spinnerColor: state.colors.spinnerColor,
  page: state.pagination.page
});

export default connect(mapStateToProps)(HomePage);



