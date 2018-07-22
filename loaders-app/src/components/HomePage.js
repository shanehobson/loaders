import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import SearchBar from './SearchBar';
import Paginate from './Pagination';
import SpinnerContainerList from './SpinnerContainerList';
import Footer from './Footer';
import spinnerDtoArray from '../spinners-data/SpinnerDTOs';
import '../styles/NavBar.css';
import '../styles/SpinnerContainer.css';
import '../styles/LayoutStyles.css';
import '../styles/Header.css';
import '../styles/Pagination.css';
import '../styles/Footer.css';

const HomePage = () => (
  <div>
    <NavBar />
    <Header />
    <SearchBar />
    <Paginate />
    <SpinnerContainerList spinnerDtoArray={spinnerDtoArray}/>
    <Paginate />
    <Footer />
  </div>
);

export default HomePage;



