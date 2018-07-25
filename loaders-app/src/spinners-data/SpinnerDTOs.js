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

import Spinner4 from './components/Spinner4.js';
import {
  spinner4HTML,
  spinner4CSS,
  spinner4Javascript
} from './source/Spinner4Source.js';

import Spinner5 from './components/Spinner5.js';
import {
  spinner5HTML,
  spinner5CSS,
  spinner5Javascript
} from './source/Spinner5Source.js';

import Spinner6 from './components/Spinner6.js';
import {
  spinner6HTML,
  spinner6CSS,
  spinner6Javascript
} from './source/Spinner6Source.js';

import Spinner7 from './components/Spinner7.js';
import {
  spinner7HTML,
  spinner7CSS,
  spinner7Javascript
} from './source/Spinner7Source.js';

import Spinner8 from './components/Spinner8.js';
import {
  spinner8HTML,
  spinner8CSS,
  spinner8Javascript
} from './source/Spinner8Source.js';

import Spinner9 from './components/Spinner9.js';
import {
  spinner9HTML,
  spinner9CSS,
  spinner9Javascript
} from './source/Spinner9Source.js';

import React from 'react';

//turn this into function that returns array
//color is prop from each spinner copmonent
// then do inline styles in each spinner component to override color

const spinnerDtoArray = spinnerColor => {
  return [
    {
      id: 1, 
      spinnerComponent:  <Spinner1 spinnerColor={spinnerColor} />,
      html: spinner1HTML,
      css: spinner1CSS,
      javascript: spinner1Javascript
    }, 
    
    {
      id: 2, 
      spinnerComponent:  <Spinner2 spinnerColor={spinnerColor} />,
      html: spinner2HTML,
      css: spinner2CSS,
      javascript: spinner2Javascript
    }, 
   
    {
      id: 3, 
      spinnerComponent:  <Spinner3 spinnerColor={spinnerColor} />,
      html: spinner3HTML,
      css: spinner3CSS,
      javascript: spinner3Javascript
    },
  
    {
      id: 4, 
      spinnerComponent:  <Spinner4 spinnerColor={spinnerColor} />,
      html: spinner4HTML,
      css: spinner4CSS,
      javascript: spinner4Javascript
    },
  
    {
      id: 5, 
      spinnerComponent:  <Spinner5 spinnerColor={spinnerColor} />,
      html: spinner5HTML,
      css: spinner5CSS,
      javascript: spinner5Javascript
    },
  
    {
      id: 6, 
      spinnerComponent:  <Spinner6 spinnerColor={spinnerColor} />,
      html: spinner6HTML,
      css: spinner6CSS,
      javascript: spinner6Javascript
    },
  
    {
      id: 7, 
      spinnerComponent:  <Spinner7 spinnerColor={spinnerColor} />,
      html: spinner7HTML,
      css: spinner7CSS,
      javascript: spinner7Javascript
    },
  
    {
      id: 8, 
      spinnerComponent:  <Spinner8 spinnerColor={spinnerColor} />,
      html: spinner8HTML,
      css: spinner8CSS,
      javascript: spinner8Javascript
    },
  
    {
      id: 9, 
      spinnerComponent:  <Spinner9 spinnerColor={spinnerColor} />,
      html: spinner9HTML,
      css: spinner9CSS,
      javascript: spinner9Javascript
    }
  ]
}

export default spinnerDtoArray;