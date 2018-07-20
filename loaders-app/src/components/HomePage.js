import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import SearchBar from './SearchBar';
import Paginate from './Pagination';
import SpinnerList from './SpinnerList';
import '../styles/NavBar.css';
import '../styles/Spinner.css';
import '../styles/LayoutStyles.css';
import '../styles/Header.css';
import '../styles/Pagination.css';

const spinners = [{prop: 'exampleSpinnerProp'}, 
  {prop: 'exampleSpinnerProp'}, 
  {prop: 'exampleSpinnerProp'}];

const HomePage = () => (
  <div>
    <NavBar />
    <Header />
    <SearchBar />
    <Paginate />
    <SpinnerList spinners={spinners}/>
    <Paginate />
  </div>
);

export default HomePage;



