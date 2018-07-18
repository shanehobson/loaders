import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import SpinnerList from './SpinnerList';
import '../styles/Spinner.css';
import '../styles/Header.css';

const spinners = [{prop: 'exampleSpinnerProp'}, 
  {prop: 'exampleSpinnerProp'}, 
  {prop: 'exampleSpinnerProp'}];

const HomePage = () => (
  <div>
    <NavBar />
    <Header />
    <SpinnerList spinners={spinners}/>
  </div>
);

export default HomePage;


