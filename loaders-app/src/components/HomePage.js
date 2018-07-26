import React from 'react';
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
import '../styles/DialogTabContent.css';
import '../styles/LayoutStyles.css';
import '../styles/Header.css';
import '../styles/Pagination.css';
import '../styles/Footer.css';

const HomePage = ({ spinnerColor }) => {
    return (
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
}

const mapStateToProps = (state) => ({
  spinnerColor: state.colors.spinnerColor
});

export default connect(mapStateToProps)(HomePage);



