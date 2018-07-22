import Spinner1 from './components/Spinner1.js';
import {
  spinner1HTML,
  spinner1CSS,
  spinner1Javascript
} from './source/Spinner1Source.js';

import Spinner2 from './components/Spinner2.js';
import {
  spinner2HTML,
  spinner2CSS,
  spinner2Javascript
} from './source/Spinner2Source.js';


import Spinner3 from './components/Spinner3.js';
import {
  spinner3HTML,
  spinner3CSS,
  spinner3Javascript
} from './source/Spinner3Source.js';

import React from 'react';

const spinnerDtoArray = [
  
  {
    id: 1, 
    spinnerComponent:  <Spinner1 />,
    html: spinner1HTML,
    css: spinner1CSS,
    javascript: spinner1Javascript
  }, 
  
  {
    id: 2, 
    spinnerComponent:  <Spinner2 />,
    html: spinner2HTML,
    css: spinner2CSS,
    javascript: spinner2Javascript
  }, 
 
  {
    id: 3, 
    spinnerComponent:  <Spinner3 />,
    html: spinner3HTML,
    css: spinner3CSS,
    javascript: spinner3Javascript
  }

]

export default spinnerDtoArray;