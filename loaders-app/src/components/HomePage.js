import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Header from './Header';
import ColorChange from './ColorChange';
import SearchBar from './SearchBar';
import Paginate from './Pagination';
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

  getSublistForPage(page, spinnerDtoArray) {
    var startIndex = (page-1)*spinnersPerPage;
    var endIndex = startIndex+(spinnersPerPage-1);

    if (endIndex > spinnerDtoArray.length-1) (
      endIndex = spinnerDtoArray.length-1
    )

    return Array,copyOfRange(spinnerDtoArray, startIndex, endIndex+1)

  }
    
  render() {

    const spinnerDtoArray = spinnerDtoArray(this.props.spinnerColor)

    return (
<<<<<<< HEAD
      <div>
        <NavBar />
        <Header />
        <SearchBar />
        <ColorChange />
        <Paginate pageCount={Math.ceil( spinnerDtoArray.length/spinnersPerPage )} />
        <SpinnerContainerList spinnerDtoArray={getSublistForPage(this.props.page, spinnerDtoArray)} /> 
        <Paginate />
        <Footer />
      </div>
    );
  }
=======
    <div>
      <NavBar />
      <Header />
      <ColorChange />
      <Paginate />
      <SpinnerContainerList spinnerDtoArray={spinnerDtoArray(spinnerColor)} /> 
      <Paginate />
      <Footer />
    </div>
  );
>>>>>>> master
}

const mapStateToProps = (state) => ({
  spinnerColor: state.colors.spinnerColor,
  page: state.pagination.page
});

export default connect(mapStateToProps)(HomePage);



