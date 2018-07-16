import React from 'react';
import NavBar from './NavBar';
import SpinnerList from './SpinnerList';
import '../styles/NavBar.css';
import '../styles/Spinner.css';

const spinners = [{prop: 'exampleSpinnerProp'}, 
  {prop: 'exampleSpinnerProp'}, 
  {prop: 'exampleSpinnerProp'}];

const HomePage = () => (
  <div>
    <NavBar />
    <SpinnerList spinners={spinners}/>
  </div>
);

export default HomePage;



