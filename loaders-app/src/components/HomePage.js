import React from 'react';
import NavBar from './NavBar';
import SpinnerList from './SpinnerList';
import '../styles/Spinner.css';

const spinners = [{prop: 'exampleSpinnerProp'}, 
  {prop: 'exampleSpinnerProp'}, 
  {prop: 'exampleSpinnerProp'}];

export const HomePage = () => (

  <div>
    <NavBar />
    <SpinnerList spinners={spinners}/>
  </div>
);

export default HomePage;


