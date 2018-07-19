import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import SearchBar from './SearchBar';
import SpinnerList from './SpinnerList';
import '../styles/Spinner.css';
import '../styles/LayoutStyles.css';
import '../styles/Header.css';

const spinners = [{prop: 'exampleSpinnerProp'}, 
  {prop: 'exampleSpinnerProp'}, 
  {prop: 'exampleSpinnerProp'}];

export const HomePage = () => (

  <div>
    <NavBar />
    <SearchBar />
    <SpinnerList spinners={spinners}/>
  </div>
);

export default HomePage;


